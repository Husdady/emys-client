// Types
import type { MouseEvent } from 'react'
import type { Url } from 'next/dist/shared/lib/router/router'

// Utils
import getUrl from './getUrl'
import isModifiedEvent from './isModifiedEvent'
import isString from '@utils/isString'

/**
 * Callback for check if should trigger start event
 * @param {string} url Url
 * @param {MouseEvent} clickEvent Click event
 * @returns
 */
export default function shouldTriggerStartEvent(url: Url, clickEvent?: MouseEvent) {
  const current = window.location
  const target = getUrl(isString(url) ? url : url?.href ?? '#')

  if (clickEvent && isModifiedEvent(clickEvent)) return false // modified events: fallback to browser behaviour
  if (current.origin !== target.origin) return false // external URL
  if (current.pathname === target.pathname && current.search === target.search) return false // same URL

  return true
}

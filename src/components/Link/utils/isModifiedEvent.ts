// Types
import type { MouseEvent } from 'react'

/**
 * Callback for check if the event is modified
 * @param {MouseEvent} event Mouse Event
 * @returns {boolean} Boolean
 */
export default function isModifiedEvent(event: MouseEvent): boolean {
  const eventTarget = event.currentTarget as HTMLAnchorElement | SVGAElement
  const target = eventTarget.getAttribute('target')
  return (
    (target && target !== '_self') ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey || // triggers resource download
    (event.nativeEvent && event.nativeEvent.button === 1)
  )
}

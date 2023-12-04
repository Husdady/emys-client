// Utils
import isUndefined from './isUndefined'

/**
 * Get query param from url
 * @param name Key name of query param
 * @param url Url for get a query param
 * @return {string} String or undefined
 */
export default function getQueryParam(name: string, url?: string): string | null {
  name = name.replace(/[[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url ?? (typeof window !== 'undefined' ? window.location.href : ''))
  if (results === null) return null
  if (isUndefined(results[2])) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

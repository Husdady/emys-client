// Utils
import isString from './isString'

/**
 * Check if is an empty string
 * @param {unknown} str Receive a 'string' as param
 * @returns {boolean} Boolean
 */
export default function isEmptyString(str: unknown): boolean {
  return isString(str) && str?.length === 0
}

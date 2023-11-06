/**
 * Check if the value received by parameters is an string
 * @param {unknown} str String as parameter
 * @returns {boolean} Boolean
 */
export default function isString(str: unknown): str is string {
  return typeof str === 'string'
}

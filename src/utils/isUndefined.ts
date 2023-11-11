/**
 * Check if the value received by parameters is an undefined
 * @param {unknown} value Undefined as parameter
 * @returns {boolean} Boolean
 */
export default function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined'
}

/**
 * Check if the value received by parameters is an number
 * @param {unknown} num Number as parameter
 * @returns {boolean} Boolean
 */
export default function isNumber(num: unknown): num is number {
  return typeof num === 'number'
}

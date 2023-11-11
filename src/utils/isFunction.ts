/**
 * Check if the func received by parameters is an function
 * @param {unknown} func function as parameter
 * @returns {boolean} Boolean
 */
export default function isFunction(func: unknown): func is () => void {
  return typeof func === 'function'
}

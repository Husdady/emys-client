/* eslint-disable no-unused-vars */
/**
 * Check if the func received by parameters is an function
 * @param {unknown} func function as parameter
 * @returns {boolean} Boolean
 */
export default function isFunction<T>(func: unknown): func is (data: T) => void {
  return typeof func === 'function'
}

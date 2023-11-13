/**
 * Check if the value received by parameters is an object
 * @param {unknown} obj Object as parameter
 * @returns {boolean} Boolean
 */
export default function isObject(obj: unknown): boolean {
  return obj !== null && obj instanceof Object && obj.constructor === Object
}

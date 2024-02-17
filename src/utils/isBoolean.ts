/**
 * Check if the value received by parameters is an boolean
 * @param {unknown} bool Boolean as parameter
 * @returns {boolean} Boolean
 */
export default function isBoolean(bool: unknown): bool is boolean {
  return typeof bool === 'boolean'
}

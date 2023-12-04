/**
 * Check if the value received by parameters is an empty array
 * @param {unknown} array Array as param
 * @returns {boolean} Boolean
 */
export default function isEmptyArray(array: unknown): array is [] {
  if (!Array.isArray(array)) return false
  return array.length === 0
}

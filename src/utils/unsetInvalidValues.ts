// Utils
import isObject from './isObject'

/**
 * Remove invalid values from an object
 * @param {string} key Field to check its value
 * @param {Record<string, unknown>} schema Object to be validated for its properties
 * @param {unknown} value Property value
 * @return {void}
 */
export function removeInvalidValuesFromObject(
  key: string,
  schema: Record<string, unknown>,
  value: unknown
): void {
  // Value is object, callback 'unsetInvalidValues' and pass current value
  if (isObject(value as object)) {
    unsetInvalidValues(value as Record<string, unknown>)
    return
  }

  // Value recieved is not allowed value, delete property from schema
  if (value === '' || value === null || typeof value === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete schema[key]
  }
}

/**
 * Remove invalid object properties
 * @param {object} obj Object to be modified
 * @return {Record<string, unknown>} Object with its properties changed
 */
export default function unsetInvalidValues(obj: Record<string, unknown>): Record<string, unknown> {
  const keys = Object.keys(obj) // Get object properties in array format

  // Iterate each object property
  for (const key of keys) {
    const value = obj[key] // Get value of each object property
    removeInvalidValuesFromObject(key, obj, value) // Delete property from object if is an invalid value
  }

  return obj
}

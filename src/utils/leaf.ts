// Utils
import isObject from './isObject'
import isUndefined from './isUndefined'

/**
 * Update nested object structure
 * @param {string} key Name of the object property
 * @param {object} schema Object that should update its structure
 * @param {unknown} value New value of the object property
 * @return {void}
 */
export function setSchema(key: string, schema: Record<string, unknown>, value: unknown): void {
  // Value of schema not is an object
  if (!isObject(value as object)) {
    schema[key] = value // Update schema value with received value
    return
  }

  // Set value to empty object if schema value hasnot been defined
  if (isUndefined(schema[key])) schema[key] = {}

  // Call 'leaf' function and assign its value to current schema value
  schema[key] = leaf(schema[key] as Record<string, unknown>, value as Record<string, unknown>)
}

/**
 * Mutate the properties of a nested object
 * @param {object} obj Arrangement with component classes
 * @param {Record<string, unknown>} newObjData Arrangement with component classes
 * @return {object} Object with its properties changed
 */
export default function leaf(
  obj: Record<string, unknown>,
  newObjData: Record<string, unknown>
): object {
  const keys = Object.keys(newObjData) // Get object properties in array format

  // Iterate each object property
  for (const key of keys) {
    let schema = obj // Save in variable the object reference
    const list = key.split('.') // Split key name by dot 'hello.world' => ['hello', 'world']
    const value = newObjData[key] // Get value of each object property
    const total = list.length - 1 // Get total of splitting key name

    // List have only item
    if (list.length === 1) {
      // Call 'setSchema' function and pass the key, schema and value
      setSchema(key, schema, value)
      continue
    }

    // Create loop based on total splitting key dot
    for (let i = 0; i < total; i++) {
      const elem = list[i] // Get each item of list
      if (isUndefined(schema[elem])) schema[elem] = {} // Value has not been defined
      schema = schema[elem] as Record<string, unknown> // Update schema with current value
    }

    const subField = list[total] // Get nest field of schema

    // Call 'setSchema' function and pass the key, schema and value
    setSchema(subField, schema, value)
  }

  return obj
}

// Utils
import isObject from './isObject'
import isUndefined from './isUndefined'

/**
 * Remove a property from a nested object
 * @param {Record<string, unknown>} obj Object for delete its nested properties
 * @param {string[]} paths Array of object paths for delete
 */
export default function unset(obj: Record<string, unknown>, paths: string[]) {
  // Iterate each path that needs to be removed
  for (const path of paths) {
    let schema = obj // Save in variable the object reference
    const list = path.split('.') // Split key name by dot 'hello.world' => ['hello', 'world']
    const total = list.length - 1 // Get total of splitting path name
    const lastField = list[total] // Get last path

    // Create loop based on total splitting path dot
    for (let i = 0; i < total; i++) {
      const key = list[i] // Get each item of list
      schema = obj[key] as Record<string, unknown> // Update schema with current value

      if (isUndefined(schema)) continue // Schema needs to have defined value
      if (isObject(schema)) unset(schema, paths) // Callback again this function is 'schema' is an object

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (obj[key] as Record<string, unknown>)[lastField] // Delete nested property from schema
    }
  }

  return obj
}

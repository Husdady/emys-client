// Utils
import isObject from './isObject'
import arraysAreEqual from './arraysAreEqual'

/**
 * Check if two objects are equal
 * @param {object} obj1 Object
 * @param {object} obj2 Object
 * @returns {boolean} Boolean
 */
export default function objectsAreEqual(obj1?: object, obj2?: object): boolean {
  // Validate params
  if (!isObject(obj1) || !isObject(obj2)) return false

  const objectValuesObj1 = Object.values(obj1 as object) // Get values of 'obj1'
  const objectValuesObj2 = Object.values(obj2 as object) // Get values of 'obj2'

  // Validate total values of both objects
  if (objectValuesObj1.length !== objectValuesObj2.length) return false

  return objectValuesObj1.every((item, i) => {
    const itemObject2 = objectValuesObj2[i]

    // Check if both items are objects
    if (isObject(item) && isObject(itemObject2)) {
      return objectsAreEqual(item, itemObject2) // Call again function
    }

    // Check if both items are an arrays
    if (Array.isArray(item) && Array.isArray(itemObject2)) {
      return arraysAreEqual(item, itemObject2) // Call again function
    }

    if (item !== itemObject2) return false
    return true
  })
}

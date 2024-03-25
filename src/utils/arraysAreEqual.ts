// Utils
import isObject from './isObject'

/**
 * Check if two arrays are equal
 * @param {Array<any>} arr1 Array
 * @param {Array<any>} arr2 Array
 * @returns {boolean} Boolean
 */
export default function arraysAreEqual(arr1?: object[], arr2?: object[]): boolean {
  // Validate params
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  if (arr1.length !== arr2.length) return false

  return arr1.every((item, i) => {
    const itemArray2 = arr2[i]

    // Check if both items are objects
    if (isObject(item) && isObject(itemArray2)) {
      const objectValuesArr1 = Object.values(item)
      const objectValuesArr2 = Object.values(itemArray2)

      // Call again function
      return arraysAreEqual(objectValuesArr1, objectValuesArr2)
    }

    // Check if both items are an arrays
    if (Array.isArray(item) && Array.isArray(itemArray2)) {
      return arraysAreEqual(item, itemArray2) // Call again function
    }

    if (item !== itemArray2) return false
    return true
  })
}

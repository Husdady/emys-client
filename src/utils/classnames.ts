// Utils
import isString from "./isString"
import isEmptyString from "./isEmptyString"

/**
 * Define the classes to a component
 * @param {(string | null)[]} arrClasses Array with component classes
 * @return {string} string
 */
export default function classnames(arrClasses: Array<string | boolean | null | undefined>): string {
  const classes = arrClasses.filter((item) => isString(item)) // Filter string values

  // 'classes' is empty array, return empty string or join each element with empty space
  return isEmptyString(classes) ? '' : classes.join(' ')
}

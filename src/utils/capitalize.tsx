// Utils
import isString from "./isString";

/**
 * Capitalize string
 * @param {string} str String
 * @returns {string} String capitalized
 */
export default function capitalize(str: string): string {
  // Validate string
  if (!isString(str)) return "";

  // Capitalize string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

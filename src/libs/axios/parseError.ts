// Utils
import isString from '@utils/isString'

// Constants
import { errors } from './constants'

/**
 * Parse a error message
 * @param {string} errorMessage Error message
 * @returns {string} Error message
 */
export default function parseError(errorMessage: string): string {
  const error = errors[errorMessage] // Get an error
  if (isString(error)) return error // Error exists in error list
  return errorMessage // Return default error message
}

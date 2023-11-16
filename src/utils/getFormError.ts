// Types
import type { FieldErrors } from 'react-hook-form'

// Utils
import isUndefined from './isUndefined'

/**
 * Get the error in a form field
 * @param field Form field, must be a String
 * @param errors Errors returned by the yup package in case the validations are not met
 * @return {string} String or undefined
 */
export default function getFormError(field: string, errors: FieldErrors): string | undefined {
  const key = errors[field] // Get form field
  if (isUndefined(key)) return // Form field not exists
  return key.message as string // Get message from field error
}

/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { addFormDataToPutRequestOnAxios, removeFormDataToPutRequestOnAxios } from '@libs/axios'

// Utils
import isUndefined from './isUndefined'

export interface CreateFormDataParams<T extends object> {
  state: object
  excludeFields?: Array<keyof T | null>
}

/**
 * Create Form Data for App forms
 * @param {CreateFormDataParams<T>} params Receive a 'state' and 'excludeFields'
 */
export default function createFormData<T extends object>({
  state,
  excludeFields
}: CreateFormDataParams<T>) {
  const data = new FormData() // Create a form data object

  // Get form state entries
  const entries = Object.entries(state)
  addFormDataToPutRequestOnAxios() // Add 'multipart/formData'

  // Add state values to form data object
  for (const [key, value] of entries) {
    if (Array.isArray(excludeFields) && excludeFields.includes(key as keyof T)) {
      continue
    }

    if (value === null || isUndefined(value)) continue
    data.append(key, value)
  }

  return {
    data: data,
    clearData: removeFormDataToPutRequestOnAxios
  }
}

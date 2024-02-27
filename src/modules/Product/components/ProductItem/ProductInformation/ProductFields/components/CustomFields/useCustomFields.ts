// Hooks
import { useMemo } from 'react'

// Types
import type { CustomFieldsProps } from './types'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

/**
 * Hook for implements the logic of the CustomFields component
 * @param {CustomFieldsProps} params Receive a 'extraInformation' and 'customProductFields'
 */
export default function useCustomFields({
  extraInformation,
  customProductFields
}: CustomFieldsProps) {
  // Check if the product has extra information
  const hasExtraInformation = useMemo(() => {
    return Array.isArray(extraInformation) && !isEmptyArray(extraInformation)
  }, [extraInformation])

  // Check if the product has custom product fields
  const hasCustomProductFields = useMemo(() => {
    return Array.isArray(customProductFields) && !isEmptyArray(customProductFields)
  }, [customProductFields])

  return {
    hasExtraInformation: hasExtraInformation,
    hasCustomProductFields: hasCustomProductFields
  }
}

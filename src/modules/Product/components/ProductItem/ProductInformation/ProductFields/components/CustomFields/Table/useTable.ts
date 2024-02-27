// Hooks
import { useMemo, useCallback } from 'react'

// Types
import type { CustomFieldsProps } from '@modules/Product/components/ProductItem/ProductInformation/ProductFields/components/CustomFields/types'

// Interfaces
import { TableItem } from '@modules/Product/components/Table/interfaces'
import { ExtraInformation, CustomProductField } from '@modules/Products/api/interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { LIST_TYPE } from '@modules/Products/api/constants'

/**
 * Hook for implements the logic of the Table component
 * @param {CustomFieldsProps} params Receive a 'extraInformation' and 'customProductFields'
 */
export default function useTable({ extraInformation, customProductFields }: CustomFieldsProps) {
  // Callback for filter an extra information
  const filterExtraInformation = useCallback((item: TableItem | null) => {
    if (item === null) return false
    return item.fieldValue
  }, [])

  // Callback for returns parsed extra information
  const parseExtraInformation = useCallback(
    (item: ExtraInformation) => {
      const customProductField = (customProductFields as CustomProductField[]).find(
        (el) => el.id === item.fieldId
      )
      if (!customProductField) return null

      const type = customProductField.type // Get the type of the custom product field
      const listValues = item.listValues // Get the list values

      return {
        type: type,
        fieldId: customProductField.id,
        fieldName: customProductField.fieldName,
        fieldValue:
          type === LIST_TYPE && Array.isArray(listValues) && !isEmptyArray(listValues)
            ? listValues
            : item.textValue
      }
    },
    [extraInformation, customProductFields]
  )

  // Define the items of the table
  const items = useMemo(() => {
    if (!Array.isArray(extraInformation)) return []
    if (!Array.isArray(customProductFields)) return []

    // Parse and filter the extra information of the product
    const filteredExtraInformation = extraInformation
      .map(parseExtraInformation)
      .filter(filterExtraInformation) as TableItem[]

    return filteredExtraInformation
  }, [extraInformation, customProductFields, parseExtraInformation, filterExtraInformation])

  return {
    items: items
  }
}

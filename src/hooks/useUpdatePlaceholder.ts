// Hooks
import { useMemo, useCallback } from 'react'
import usePlaceholder from '@config/store/states/placeholder/usePlaceholder'

// Utils
import isObject from '@utils/isObject'
import arraysAreEqual from '@utils/arraysAreEqual'
import objectsAreEqual from '@utils/objectsAreEqual'

export interface Params {
  placeholderId: string
}

/**
 * Hook that implements the logic of the Document counts
 * @param {UseDocumentCountParams} params Params
 */
export default function useUpdatePlaceholder({ placeholderId }: Params) {
  const { placeholder, updatePlaceholder } = usePlaceholder() // Get placeholder

  // Get the placeholder item
  const placeholderItem = useMemo(() => {
    const item = placeholder[placeholderId]
    return item ?? {}
  }, [placeholder])

  // Update the data of a placeholder
  const updatePlaceholderData = useCallback((data: any) => {
    const currentPlaceholderData = placeholder[placeholderId] // Get placeholder

    // Stop callback if have the same data
    if (data === currentPlaceholderData) return
    if (isObject(data) && objectsAreEqual(data, currentPlaceholderData)) return
    if (Array.isArray(data) && arraysAreEqual(data, currentPlaceholderData)) return

    // Update count of the Categories
    updatePlaceholder({ data: data, placeholderId: placeholderId })
  }, [placeholder])

  return {
    placeholderItem: placeholderItem,
    updatePlaceholderData: updatePlaceholderData
  }
}

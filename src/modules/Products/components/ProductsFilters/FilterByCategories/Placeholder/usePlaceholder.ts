// Hooks
import useUpdatePlaceholder from '@hooks/useUpdatePlaceholder'

// Constants
import { CATEGORIES_PLACEHOLDER_ID } from '@modules/Products/components/ProductsFilters/FilterByCategories/constants'

/**
 * Hook for implements the logic of the Placeholder component
 */
export default function usePlaceholder() {
  const { placeholderItem } = useUpdatePlaceholder({
    placeholderId: CATEGORIES_PLACEHOLDER_ID
  })

  return {
    items: placeholderItem ?? [],
    totalItems: placeholderItem?.length ?? 0
  }
}

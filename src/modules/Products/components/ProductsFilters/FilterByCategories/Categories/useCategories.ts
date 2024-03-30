// Hooks
import useMounted from '@hooks/useMounted'
import useTabletScreen from '@hooks/screen/useTabletScreen'
import useUpdatePlaceholder from '@hooks/useUpdatePlaceholder'
import { useRef, useCallback } from 'react'

// Constants
import { CATEGORIES_PLACEHOLDER_ID } from '@modules/Products/components/ProductsFilters/FilterByCategories/constants'

/**
 * Hook for implements the logic of the Categories component
 */
export default function useCategories() {
  const isTabletScreen = useTabletScreen()
  const categoriesRef = useRef<HTMLUListElement | null>(null)

  const { updatePlaceholderData } = useUpdatePlaceholder({
    placeholderId: CATEGORIES_PLACEHOLDER_ID
  })

  // Callback for save the width of each category
  const saveWidthOfEachCategory = useCallback(() => {
    if (!categoriesRef.current) return

    const categoryItems = [...categoriesRef.current.querySelectorAll('.product-category-item')]

    const data: any[] = []

    categoryItems.forEach((item) => {
      data.push({ width: `${item.getBoundingClientRect().width.toFixed(2)}px` })
    })

    updatePlaceholderData(data)
  }, [categoriesRef.current])

  useMounted(() => {
    saveWidthOfEachCategory()
  }, [categoriesRef.current])

  return {
    categoriesRef: categoriesRef,
    isTabletScreen: isTabletScreen
  }
}

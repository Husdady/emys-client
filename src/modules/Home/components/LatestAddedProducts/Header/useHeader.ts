// Hooks
import { useCallback } from 'react'

// Constants
import { PRODUCT_ITEMS_ID } from '@modules/Home/components/LatestAddedProducts/Products/Results/constants'

/**
 * Hook for implements the logic of the Header component
 */
export default function useHeader() {
  // Get the container of the products
  const getProductsContainer = useCallback(() => {
    const container = document.getElementById(PRODUCT_ITEMS_ID)
    if (container === null) return
    return container
  }, [])

  // Callback for make scroll and show the next products
  const showNextProducts = useCallback(() => {
    const container = getProductsContainer()
    if (!container) return

    container.scrollLeft += 200
  }, [])

  // Callback for make scroll and show the previous products
  const showPreviousProducts = useCallback(() => {
    const container = getProductsContainer()
    if (!container) return

    container.scrollLeft -= 200
  }, [])

  return { showNextProducts: showNextProducts, showPreviousProducts: showPreviousProducts }
}

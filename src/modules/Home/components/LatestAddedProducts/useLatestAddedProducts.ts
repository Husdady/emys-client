// Hooks
import { useRef } from 'react'
import { useGetLatestProductsQuery } from '@modules/Home/api/get-latest-products/graphql'
import useScrollOnArrows from './hooks/useScrollOnArrows'

// Constants
import { LIMIT_LATEST_PRODUCTS } from './constants'

/**
 * Hook for implements the logic of the LatestAddedProducts component
 */
export default function useLatestAddedProducts() {
  const productItemsRef = useRef<HTMLUListElement | null>(null)
  const queryData = useGetLatestProductsQuery({ populate: true, limit: LIMIT_LATEST_PRODUCTS })

  const { showNextProducts, showPreviousProducts, isDisabledNextArrow, isDisabledPreviousArrow } =
    useScrollOnArrows({
      isLoading: queryData.isLoading,
      productItemsRef: productItemsRef
    })

  return {
    isError: queryData.isError,
    isLoading: queryData.isLoading,
    productItemsRef: productItemsRef,
    showNextProducts: showNextProducts,
    showPreviousProducts: showPreviousProducts,
    isDisabledNextArrow: isDisabledNextArrow,
    isDisabledPreviousArrow: isDisabledPreviousArrow,
    products: queryData?.data?.latestProducts ?? []
  }
}

// Hooks
import { useMemo, useRef } from 'react'
import { useGetLatestProductsQuery } from '@modules/Home/api/get-latest-products/graphql'
import useCheckScrollbar from './hooks/useCheckScrollbar'
import useScrollOnArrows from './hooks/useScrollOnArrows'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { LIMIT_LATEST_PRODUCTS, LIMIT_LATEST_PRODUCTS_FOR_MOBILE } from './constants'

/**
 * Hook for implements the logic of the LatestAddedProducts component
 */
export default function useLatestAddedProducts() {
  const productItemsRef = useRef<HTMLUListElement | null>(null)

  const queryData = useGetLatestProductsQuery(
    {
      populate: true,
      limit: window.innerHeight <= 640 ? LIMIT_LATEST_PRODUCTS_FOR_MOBILE : LIMIT_LATEST_PRODUCTS
    },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true
    }
  )

  // Define the latest products
  const products = useMemo(
    () => queryData?.data?.latestProducts ?? [],
    [queryData?.data?.latestProducts]
  )

  // Check if has empty latest products
  const hasEmptyProducts = useMemo(() => isEmptyArray(products), [products])

  const hasScrollbar = useCheckScrollbar({
    isLoading: queryData.isLoading,
    productItemsRef: productItemsRef
  })

  const { showNextProducts, showPreviousProducts, isDisabledNextArrow, isDisabledPreviousArrow } =
    useScrollOnArrows({
      hasScrollbar: hasScrollbar,
      isError: queryData.isError,
      isLoading: queryData.isLoading,
      productItemsRef: productItemsRef,
      hasEmptyProducts: hasEmptyProducts
    })

  return {
    products: products,
    hasScrollbar: hasScrollbar,
    isError: queryData.isError,
    isLoading: queryData.isLoading,
    productItemsRef: productItemsRef,
    hasEmptyProducts: hasEmptyProducts,
    showNextProducts: showNextProducts,
    showPreviousProducts: showPreviousProducts,
    isDisabledNextArrow: isDisabledNextArrow,
    isDisabledPreviousArrow: isDisabledPreviousArrow
  }
}

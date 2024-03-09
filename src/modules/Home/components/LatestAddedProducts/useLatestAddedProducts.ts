// Hooks
import { useMemo, useRef } from 'react'
import { useGetLatestProductsQuery } from '@modules/Home/api/getLatestProducts/graphql'
import useScrollOnArrows from '@modules/Product/hooks/useScrollOnArrows'
import useCheckScrollbar from '@hooks/useCheckScrollbar'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { THREE_MINUTES } from '@assets/data/interval'
import { LIMIT_LATEST_PRODUCTS, LIMIT_LATEST_PRODUCTS_FOR_MOBILE } from './constants'

/**
 * Hook for implements the logic of the LatestAddedProducts component
 */
export default function useLatestAddedProducts() {
  const productItemsRef = useRef<HTMLUListElement | null>(null)

  const queryData = useGetLatestProductsQuery(
    {
      populate: true,
      limit: window.innerWidth <= 640 ? LIMIT_LATEST_PRODUCTS_FOR_MOBILE : LIMIT_LATEST_PRODUCTS
    },
    { refetchOnReconnect: true, refetchOnMountOrArgChange: true, pollingInterval: THREE_MINUTES }
  )

  // Define the latest products
  const products = useMemo(
    () => queryData?.data?.latestProducts ?? [],
    [queryData?.data?.latestProducts]
  )

  // Check if has empty latest products
  const hasEmptyProducts = useMemo(() => isEmptyArray(products), [products])

  const hasScrollbar = useCheckScrollbar({
    elementRef: productItemsRef,
    arrayDeps: [queryData.isLoading]
  })

  const arrowsData = useScrollOnArrows({
    hasScrollbar: hasScrollbar,
    isError: queryData.isError,
    isLoading: queryData.isLoading,
    productItemsRef: productItemsRef,
    hasEmptyProducts: hasEmptyProducts
  })

  return {
    ...arrowsData,
    products: products,
    hasScrollbar: hasScrollbar,
    isError: queryData.isError,
    isLoading: queryData.isLoading,
    productItemsRef: productItemsRef,
    hasEmptyProducts: hasEmptyProducts
  }
}

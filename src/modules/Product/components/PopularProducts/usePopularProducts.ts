// Hooks
import { useRef, useMemo } from 'react'
import { useParams } from 'next/navigation'
import useMounted from '@hooks/useMounted'
import useCheckScrollbar from '@hooks/useCheckScrollbar'
import useScrollOnArrows from '@modules/Product/hooks/useScrollOnArrows'
import { useLazyGetPopularProductsQuery } from '@modules/Product/api/graphql'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { LIMIT_POPULAR_PRODUCTS } from './constants'

/**
 * Hook for implements the logic of the PopularProducts component
 * @param {PopularProductsProps} params Receive a 'products'
 */
export default function usePopularProducts() {
  const params = useParams()
  const productItemsRef = useRef<HTMLUListElement | null>(null)
  const [getPopularProducts, queryData] = useLazyGetPopularProductsQuery()

  // Get the popular products
  const popularProducts = useMemo(() => {
    return queryData?.data?.popularProducts ?? []
  }, [queryData])

  // Check if has empty popular products
  const hasEmptyProducts = useMemo(() => isEmptyArray(popularProducts), [popularProducts])

  const hasScrollbar = useCheckScrollbar({
    elementRef: productItemsRef,
    arrayDeps: [queryData.isLoading]
  })

  const arrowsData = useScrollOnArrows({
    isError: queryData.isError,
    isLoading: queryData.isLoading,
    hasScrollbar: hasScrollbar,
    productItemsRef: productItemsRef,
    hasEmptyProducts: hasEmptyProducts
  })

  useMounted(() => {
    const code = params?.code

    // Get product by code
    if (isString(code) && !isEmptyString(code)) {
      getPopularProducts({
        sortRandomly: true,
        limit: LIMIT_POPULAR_PRODUCTS,
        excludeProductsByCode: [code]
      })
    }
  }, [params?.code])

  return {
    ...arrowsData,
    products: popularProducts,
    hasScrollbar: hasScrollbar,
    isLoading: queryData.isLoading,
    productItemsRef: productItemsRef,
    hasEmptyProducts: hasEmptyProducts
  }
}

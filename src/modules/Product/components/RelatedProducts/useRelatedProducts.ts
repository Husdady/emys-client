// Hooks
import { useRef, useMemo } from 'react'
import useCheckScrollbar from '@hooks/useCheckScrollbar'
import useScrollOnArrows from '@modules/Product/hooks/useScrollOnArrows'

// Interfaces
import { RelatedProductsProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

/**
 * Hook for implements the logic of the LatestAddedProducts component
 * @param {RelatedProductsProps} params Receive a 'products'
 */
export default function useRelatedProducts({ products }: RelatedProductsProps) {
  const productItemsRef = useRef<HTMLUListElement | null>(null)

  // Check if has empty latest products
  const hasEmptyProducts = useMemo(() => isEmptyArray(products), [products])

  const hasScrollbar = useCheckScrollbar({
    elementRef: productItemsRef,
    arrayDeps: [products.length]
  })

  const arrowsData = useScrollOnArrows({
    isError: false,
    isLoading: false,
    hasScrollbar: hasScrollbar,
    productItemsRef: productItemsRef,
    hasEmptyProducts: hasEmptyProducts
  })

  return {
    ...arrowsData,
    products: products,
    hasScrollbar: hasScrollbar,
    productItemsRef: productItemsRef,
    hasEmptyProducts: hasEmptyProducts
  }
}

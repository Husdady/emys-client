// Librarys
import useMounted from '@hooks/useMounted'
import { useState, useCallback, MutableRefObject } from 'react'

export interface Params {
  isLoading: boolean
  productItemsRef: MutableRefObject<HTMLUListElement | null>
}

/**
 * Hook for check if the scroll is at the start or the end on the Products
 * @param {Params} params Receive a 'productItemsRef'
 */
export default function useCheckScrollbar({ isLoading, productItemsRef }: Params) {
  // Define callback for check if the products container has scrollbar
  const checkScrollbar = useCallback(() => {
    if (productItemsRef.current === null) return false // Validates ref

    const scrollWidth = productItemsRef.current.scrollWidth // Get the scroll width
    const clientWidth = productItemsRef.current.clientWidth // Get the client width

    return scrollWidth > clientWidth // Check scrollbar
  }, [])

  const [hasScrollbar, setScrollbar] = useState(() => checkScrollbar())

  // Callback for update the validation of the scrollbar visibility
  const updateHasScrollbar = useCallback(() => {
    const flag = checkScrollbar()
    if (flag === hasScrollbar) return

    setScrollbar(flag) // Update validation
  }, [hasScrollbar, checkScrollbar])

  useMounted(() => {
    updateHasScrollbar()
    productItemsRef.current?.addEventListener('resize', updateHasScrollbar)

    return () => {
      productItemsRef.current?.removeEventListener('resize', updateHasScrollbar)
    }
  }, [isLoading, updateHasScrollbar])

  return hasScrollbar
}

// Librarys
import useMounted from '@root/src/hooks/useMounted'
import { useCallback, MutableRefObject, useState } from 'react'

export const MIN_WIDTH = 1000

export interface Params {
  isLoading: boolean
  productItemsRef: MutableRefObject<HTMLUListElement | null>
}

/**
 * Hook for implements the logic of the Header component
 */
export default function useScrollOnArrows({ isLoading, productItemsRef }: Params) {
  const [isDisabledNextArrow, setDisabledNextArrow] = useState(false)
  const [isDisabledPreviousArrow, setDisabledPreviousArrow] = useState(true)

  // Callback for make scroll and show the next products
  const showNextProducts = useCallback(() => {
    if (productItemsRef.current === null) return
    productItemsRef.current.scrollLeft += MIN_WIDTH
  }, [])

  // Callback for make scroll and show the previous products
  const showPreviousProducts = useCallback(() => {
    if (productItemsRef.current === null) return
    productItemsRef.current.scrollLeft -= MIN_WIDTH
  }, [])

  // Callback for handle the scroll movement
  const handleScroll = useCallback(() => {
    if (productItemsRef.current === null) return

    // Get the scroll left of the wrapper
    const scrollLeft = productItemsRef.current.scrollLeft

    // Scroll is at start position and disable previous arrow
    if (scrollLeft < 1 && isDisabledPreviousArrow === false) {
      setDisabledPreviousArrow(true)
    }

    // Scroll not is at start position and enable previous arrow
    if (scrollLeft >= 1 && isDisabledPreviousArrow) {
      setDisabledPreviousArrow(false)
    }

    // Get scroll/client width
    const scrollWidth = productItemsRef.current.scrollWidth
    const clientWidth = productItemsRef.current.clientWidth

    // Scroll is at end position
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth

    // Disable next arrow
    if (isAtEnd && isDisabledNextArrow === false) {
      setDisabledNextArrow(true)
    }

    // Enable next arrow
    if (!isAtEnd && isDisabledNextArrow) {
      setDisabledNextArrow(false)
    }
  }, [isDisabledNextArrow, isDisabledPreviousArrow])

  useMounted(() => {
    productItemsRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      productItemsRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [isLoading, handleScroll])

  return {
    showNextProducts: showNextProducts,
    showPreviousProducts: showPreviousProducts,
    isDisabledNextArrow: isLoading || isDisabledNextArrow,
    isDisabledPreviousArrow: isLoading || isDisabledPreviousArrow
  }
}

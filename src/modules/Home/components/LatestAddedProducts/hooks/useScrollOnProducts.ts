// Librarys
import { useCallback, MutableRefObject } from 'react'

/**
 * Hook for check if the scroll is at the start or the end on the Products
 */
export default function useScrollOnProducts() {
  // Check if the scrollbar is at start
  const isScrollbarAtStart = useCallback(
    (productItemsRef: MutableRefObject<HTMLUListElement | null>) => {
      if (productItemsRef.current === null) return false

      // Get the scroll left of the wrapper
      const scrollLeft = productItemsRef.current.scrollLeft

      // Check if is at end
      return scrollLeft < 1
    },
    []
  )

  // Check if the scrollbar is at end
  const isScrollbarAtEnd = useCallback(
    (productItemsRef: MutableRefObject<HTMLUListElement | null>) => {
      if (productItemsRef.current === null) return false

      // Get the scroll left of the wrapper
      const scrollLeft = productItemsRef.current.scrollLeft

      // Get scroll/client width
      const scrollWidth = productItemsRef.current.scrollWidth
      const clientWidth = productItemsRef.current.clientWidth

      // Check if is at end
      return scrollLeft >= scrollWidth - clientWidth
    },
    []
  )

  return {
    isScrollbarAtEnd: isScrollbarAtEnd,
    isScrollbarAtStart: isScrollbarAtStart
  }
}

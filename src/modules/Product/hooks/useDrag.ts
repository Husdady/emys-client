// Librarys
import { useRef, useState, useCallback, MouseEvent } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'
import useMobileScreen from '@hooks/useMobileScreen'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'

// Interfaces
import { ProductsProps } from '@modules/Home/components/LatestAddedProducts/Products/interfaces'

/**
 * Hook for implements the draggin logic on the Products
 * @param {Pick<ProductsProps, 'hasScrollbar' | 'productItemsRef'>} params Receive props of the Products component
 */
export default function useDrag({
  hasScrollbar,
  productItemsRef
}: Pick<ProductsProps, 'hasScrollbar' | 'productItemsRef'>) {
  const prevScrollLeft = useRef(0)
  const isMobileScreen = useMobileScreen()
  const [isDragging, setDragging] = useState(false)
  const [isShowingLeftShadow, setShowingLeftShadow] = useState(false)
  const [isShowingRightShadow, setShowingRightShadow] = useState(true)

  // Check if the scrollbar is at start
  const isScrollbarAtStart = useCallback(() => {
    if (productItemsRef.current === null) return false

    // Get the scroll left of the wrapper
    const scrollLeft = productItemsRef.current.scrollLeft

    // Check if is at end
    return scrollLeft < 1
  }, [])

  // Check if the scrollbar is at end
  const isScrollbarAtEnd = useCallback(() => {
    if (productItemsRef.current === null) return false

    // Get the scroll left of the wrapper
    const scrollLeft = productItemsRef.current.scrollLeft

    // Get scroll/client width
    const scrollWidth = productItemsRef.current.scrollWidth
    const clientWidth = productItemsRef.current.clientWidth

    // Check if is at end
    return scrollLeft >= scrollWidth - clientWidth
  }, [])

  // Callback for catch the mouse down
  const handleMouseDown = useCallback(() => {
    if (isDragging || !hasScrollbar || isMobileScreen) return
    setDragging(true)
  }, [isDragging, hasScrollbar, isMobileScreen])

  // Callback for manage the scroll movement
  const handleScroll = useCallback(() => {
    // Remove right shadow
    if (isScrollbarAtEnd() && isShowingRightShadow) {
      setShowingRightShadow(false)
    }

    // Remove left shadow
    if (isScrollbarAtStart() && isShowingLeftShadow) {
      setShowingLeftShadow(false)
    }
  }, [isScrollbarAtEnd, isScrollbarAtStart, isShowingLeftShadow, isShowingRightShadow])

  // Callback for stop the dragging on the products
  const stopDragging = useCallback(() => {
    // Stop dragging
    if (!isDragging || isMobileScreen || productItemsRef.current === null) return

    setDragging(false)
    productItemsRef.current.classList.remove('drag')
  }, [isDragging, isMobileScreen])

  // Callback for catch the mouse move
  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLUListElement>) => {
      if (!isDragging || isMobileScreen) return
      if (productItemsRef.current === null) return

      productItemsRef.current.classList.add('drag')
      productItemsRef.current.scrollLeft -= e.movementX

      // Get the scroll left of the wrapper
      const scrollLeft = productItemsRef.current.scrollLeft

      if (scrollLeft < prevScrollLeft.current) {
        if (isShowingRightShadow) {
          setShowingRightShadow(false)
        }

        if (isScrollbarAtStart() && isShowingLeftShadow) {
          setShowingLeftShadow(false)
        }

        if (!isScrollbarAtStart() && !isShowingLeftShadow) {
          setShowingLeftShadow(true)
        }
      } else {
        if (isShowingLeftShadow) {
          setShowingLeftShadow(false)
        }

        if (isScrollbarAtEnd()) {
          setShowingRightShadow(false)
        } else {
          if (!isShowingRightShadow) {
            setShowingRightShadow(true)
          }
        }
      }

      prevScrollLeft.current = scrollLeft
    },
    [
      isDragging,
      isScrollbarAtEnd,
      isScrollbarAtStart,
      isShowingLeftShadow,
      isShowingRightShadow,
      isMobileScreen
    ]
  )

  useMounted(() => {
    document.addEventListener('mouseup', stopDragging)

    return () => {
      document.removeEventListener('mouseup', stopDragging)
    }
  }, [stopDragging])

  return {
    handleScroll: handleScroll,
    isMobileScreen: isMobileScreen,
    handleMouseMove: handleMouseMove,
    handleMouseDown: handleMouseDown,
    isShowingLeftShadow: isShowingLeftShadow && !isMobileScreen,
    isShowingRightShadow: isShowingRightShadow && !isMobileScreen
  }
}

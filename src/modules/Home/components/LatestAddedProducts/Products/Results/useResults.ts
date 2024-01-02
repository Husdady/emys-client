// Librarys
import { useRef, useState, useCallback, MouseEvent, useMemo } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'

// Interfaces
import { ResultsProps } from './interfaces'

/**
 * Hook for implements the logic of the Results component
 * @param {ResultsProps} params Receive props of the Results component
 */
export default function useResults({ products, productItemsRef }: ResultsProps) {
  const prevScrollLeft = useRef(0)
  const [results, setResults] = useState(products)
  const [isTabsDragging, setTabsDragging] = useState(false)
  const isBiggestTabletScreen = useBiggestTabletScreen()
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
    if (isTabsDragging || isBiggestTabletScreen) return
    setTabsDragging(true)
  }, [isTabsDragging])

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
    if (!isTabsDragging || isBiggestTabletScreen || productItemsRef.current === null) return

    setTabsDragging(false)
    productItemsRef.current.classList.remove('drag')
  }, [isTabsDragging, isBiggestTabletScreen])

  // Callback for catch the mouse move
  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLUListElement>) => {
      if (!isTabsDragging || isBiggestTabletScreen) return
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
      isTabsDragging,
      isScrollbarAtEnd,
      isScrollbarAtStart,
      isShowingLeftShadow,
      isShowingRightShadow,
      isBiggestTabletScreen
    ]
  )

  useMounted(() => {
    document.addEventListener('mouseup', stopDragging)

    return () => {
      document.removeEventListener('mouseup', stopDragging)
    }
  }, [stopDragging])

  return {
    results: results,
    setResults: setResults,
    handleScroll: handleScroll,
    productItemsRef: productItemsRef,
    handleMouseMove: handleMouseMove,
    handleMouseDown: handleMouseDown,
    isShowingLeftShadow: isShowingLeftShadow,
    isShowingRightShadow: isShowingRightShadow,
    isBiggestTabletScreen: isBiggestTabletScreen
  }
}
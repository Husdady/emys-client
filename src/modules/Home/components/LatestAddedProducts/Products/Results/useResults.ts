// Librarys
import { useRef, useState, useCallback, MouseEvent } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'

// Interfaces
import { ResultsProps } from './interfaces'

/**
 * Hook for implements the logic of the Results component
 * @param {ResultsProps} params Receive props of the Results component
 */
export default function useResults({ products }: ResultsProps) {
  const prevScrollLeft = useRef(0)
  const [results, setResults] = useState(products)
  const [isTabsDragging, setTabsDragging] = useState(false)
  const isBiggestTabletScreen = useBiggestTabletScreen()
  const [isShowingShadowLeft, setShowingShadowLeft] = useState(false)
  const [isShowingShadowRight, setShowingShadowRight] = useState(true)
  const productItemsRef = useRef<HTMLUListElement | null>(null)

  // Callback for catch the mouse down
  const handleMouseDown = useCallback(() => {
    if (isTabsDragging || isBiggestTabletScreen) return
    setTabsDragging(true)
  }, [isTabsDragging])

  // Callback for stop the dragging on the products
  const stopDragging = useCallback(() => {
    if (!isTabsDragging || isBiggestTabletScreen) return
    if (productItemsRef.current === null) return

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
        if (isShowingShadowRight) {
          setShowingShadowRight(false)
        }

        if (scrollLeft < 1 && isShowingShadowLeft) {
          setShowingShadowLeft(false)
        }

        if (scrollLeft >= 1 && !isShowingShadowLeft) {
          setShowingShadowLeft(true)
        }
      } else {
        // Get scroll/client width
        const scrollWidth = productItemsRef.current.scrollWidth
        const clientWidth = productItemsRef.current.clientWidth

        // Check if is at end
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth

        if (isShowingShadowLeft) {
          setShowingShadowLeft(false)
        }

        if (isAtEnd) {
          setShowingShadowRight(false)
        } else {
          if (!isShowingShadowRight) {
            setShowingShadowRight(true)
          }
        }
      }

      prevScrollLeft.current = scrollLeft
    },
    [isTabsDragging, isShowingShadowLeft, isShowingShadowRight, isBiggestTabletScreen]
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
    productItemsRef: productItemsRef,
    handleMouseMove: handleMouseMove,
    handleMouseDown: handleMouseDown,
    isShowingShadowLeft: isShowingShadowLeft,
    isShowingShadowRight: isShowingShadowRight,
    isBiggestTabletScreen: isBiggestTabletScreen
  }
}

// Librarys
import { VariableSizeList } from 'react-window'
import { useRef, useMemo, useCallback, useState, CSSProperties } from 'react'

// Hooks
import useMounted from './useMounted'
import useWindowSize from './useWindowSize'
import useCheckVerticalScrollbar from './useCheckVerticalScrollbar'

// Utils
import isNumber from '@utils/isNumber'

interface Params {
  defaultOptionHeight: number
  defaultContainerHeight: number
}

/**
 * Hook for define the height of the each option in the VariableSizeList
 */
export default function useHeightForVirtualizedOption({
  defaultOptionHeight,
  defaultContainerHeight
}: Params) {
  const [windowWidth] = useWindowSize()
  const [listHeight, setListHeight] = useState(0)
  const sizeMap = useRef<Record<number, number>>({})
  const listRef = useRef<VariableSizeList | null>(null)
  const containerListRef = useRef<HTMLDivElement | null>(null)

  // Define styles for the container
  const containerStyle = useMemo<CSSProperties>(() => {
    return { height: defaultContainerHeight, maxHeight: defaultContainerHeight }
  }, [])

  // Check if the container has scrollbar
  const hasScrollbar = useCheckVerticalScrollbar({
    elementRef: { current: containerListRef.current?.firstChild as HTMLElement }
  })

  // Callback for set the size for an option
  const setSize = useCallback((index: number, size: number) => {
    if (listRef.current !== null) {
      listRef.current.resetAfterIndex(0)
    }

    sizeMap.current = { ...sizeMap.current, [index]: size }
  }, [])

  // Callback for get the size of an option
  const getSize = useCallback((index: number) => {
    // Get size of the option
    const optionSize = sizeMap.current[index]

    // Return size
    return !isNumber(optionSize) ? defaultOptionHeight : optionSize
  }, [])

  useMounted(() => {
    if (containerListRef.current !== null) {
      // Get height of the container
      const containerHeight = containerListRef.current.offsetHeight

      // Update height list
      setListHeight(containerHeight)

      if (listRef.current !== null) {
        listRef.current.resetAfterIndex(0)
      }
    }
  }, [])

  return {
    listRef: listRef,
    hasScrollbar: hasScrollbar,
    containerStyle: containerStyle,
    containerListRef: containerListRef,
    listHeight: listHeight,
    getOptionSize: getSize,
    setOptionSize: setSize,
    windowWidth: windowWidth
  }
}

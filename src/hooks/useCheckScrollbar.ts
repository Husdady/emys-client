// Librarys
import { useState, useCallback, MutableRefObject, DependencyList } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

export interface Params {
  arrayDeps?: DependencyList
  elementRef: MutableRefObject<HTMLElement | null>
}

/**
 * Hook for check if exists the scrollbar in the element
 * @param {Params} params Receive a 'arrayDeps' and 'elementRef'
 */
export default function useCheckScrollbar({ elementRef, arrayDeps = [] }: Params) {
  // Define callback for check if the products container has scrollbar
  const checkScrollbar = useCallback(() => {
    const el = elementRef?.current // Get element
    if (el === null) return false // Validates ref

    const scrollWidth = el.scrollWidth // Get the scroll width
    const clientWidth = el.clientWidth // Get the client width

    return scrollWidth > clientWidth // Check scrollbar
  }, [elementRef])

  const [hasScrollbar, setScrollbar] = useState(() => {
    return checkScrollbar()
  })

  // Callback for update the validation of the scrollbar visibility
  const updateHasScrollbar = useCallback(() => {
    const flag = checkScrollbar()
    if (flag === hasScrollbar) return

    setScrollbar(flag) // Update validation
  }, [hasScrollbar, checkScrollbar])

  useMounted(() => {
    updateHasScrollbar()
    window.addEventListener('resize', updateHasScrollbar)

    return () => {
      window.removeEventListener('resize', updateHasScrollbar)
    }
  }, [arrayDeps, elementRef, updateHasScrollbar])

  return hasScrollbar
}

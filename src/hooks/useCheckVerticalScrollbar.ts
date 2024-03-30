// Librarys
import { useState, useCallback, MutableRefObject, DependencyList } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

interface Params {
  arrayDeps?: DependencyList
  elementRef: MutableRefObject<HTMLElement | null>
}

/**
 * Hook for check if exists a vertical scrollbar in the element
 * @param {Params} params Receive a 'arrayDeps' and 'elementRef'
 */
export default function useCheckVerticalScrollbar({ elementRef, arrayDeps = [] }: Params) {
  // Define callback for check if the products container has scrollbar
  const checkScrollbar = useCallback(() => {
    const el = elementRef?.current // Get element
    if (!el) return false // Validates ref

    const scrollHeight = el.scrollHeight // Get the scroll height
    const clientHeight = el.clientHeight // Get the client height

    return scrollHeight > clientHeight // Check scrollbar
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

// Librarys
import { useCallback, MutableRefObject } from 'react'

// Hooks
import useMounted from './useMounted'

const FIX_CLASS = 'to-bottom'

interface Params {
  ref: MutableRefObject<HTMLDivElement | null>
}

/**
 * Hook for fix position of the float options
 * @param {Params} params Params
 */
export default function useFixPositionOfFloatOptions({ ref }: Params) {
  // Callback for remove the fix added to float options when the component is unmounted
  const removeFixPositionOfFloatOptions = useCallback(() => {
    // Validate 'ref' param
    if (ref.current === null) return

    // Remove class added from the float options
    ref.current?.classList.remove(FIX_CLASS)
  }, [ref.current])

  // Callback for fix position of float options
  const fixPositionOfFloatOptions = useCallback(() => {
    const refEl = ref.current // Get ref element

    // Validate 'ref' param
    if (refEl === null) return

    const { top, bottom } = refEl.getBoundingClientRect() // Get top and bottom position
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight

    // Check if the element is completely visible in the viewport
    const isVisibleInViewport = top >= 0 && bottom <= viewportHeight
    if (isVisibleInViewport) return

    // Add class for fix the position
    ref.current?.classList.add(FIX_CLASS)
  }, [ref.current])

  useMounted(() => {
    fixPositionOfFloatOptions()

    return () => {
      removeFixPositionOfFloatOptions()
    }
  }, [ref.current])
}

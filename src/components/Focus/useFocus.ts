// Hooks
import { useRef } from 'react'
import useMounted from '@hooks/useMounted'
import useBiggestTabletScreen from '@root/src/hooks/useBiggestTabletScreen'

// Constants
import { MOBILE_SCROLL_PARAMS, DESKTOP_SCROLL_PARAMS } from './constants'

/**
 * Hook for implements the logic of the Focus component
 */
export default function useFocus() {
  const divRef = useRef<HTMLDivElement | null>(null)
  const isBiggestTabletScreen = useBiggestTabletScreen()

  useMounted(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView(
        isBiggestTabletScreen ? MOBILE_SCROLL_PARAMS : DESKTOP_SCROLL_PARAMS
      )
    }
  }, [isBiggestTabletScreen])

  return {
    divRef: divRef
  }
}

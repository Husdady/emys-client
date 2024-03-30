// Hooks
import { useRef } from 'react'
import useMounted from '@hooks/useMounted'
import useBiggestTabletScreen from '@root/src/hooks/screen/useBiggestTabletScreen'

// Interfaces
import { FocusProps } from './interfaces'

// Constants
import { SCROLL_PARAMS } from './constants'

export type Params = Pick<FocusProps, 'canFocus'>

/**
 * Hook for implements the logic of the Focus component
 * @param {Params} params Receive a 'canFocus'
 */
export default function useFocus({ canFocus }: Params) {
  const divRef = useRef<HTMLDivElement | null>(null)
  const isBiggestTabletScreen = useBiggestTabletScreen()

  useMounted(() => {
    if ((canFocus ?? true) && divRef.current) {
      divRef.current.scrollIntoView(SCROLL_PARAMS)
    }
  }, [canFocus])

  return {
    divRef: divRef
  }
}

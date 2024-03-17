// Hooks
import { useRef, useMemo } from 'react'
import useCheckVerticalScrollbar from '@hooks/useCheckVerticalScrollbar'
import useSearchOptions, {
  UseSearchOptionsParams
} from '@components/MultiSelect/hooks/useSearchOptions'

// Utils
import getVirtualizedListHeight from '@utils/getVirtualizedListHeight'

/**
 * Hook for implements the logic of the Options component
 * @param {UseSearchOptionsParams} params Receive props of the MultiSelect component
 */
export default function useOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)
  const checkboxOptionsRef = useRef<HTMLUListElement | null>(null)
  const hasScrollbar = useCheckVerticalScrollbar({ elementRef: checkboxOptionsRef })

  // Define the checkbox options style
  const checkboxOptionsStyle = useMemo(() => {
    const { defaultContainerHeight } = getVirtualizedListHeight()
    return { maxHeight: `${defaultContainerHeight}px` }
  }, [])

  return {
    ...searchData,
    hasScrollbar: hasScrollbar,
    checkboxOptionsRef: checkboxOptionsRef,
    checkboxOptionsStyle: checkboxOptionsStyle
  }
}

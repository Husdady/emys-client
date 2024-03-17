// Hooks
import { useRef, useMemo } from 'react'
import useCheckVerticalScrollbar from '@hooks/useCheckVerticalScrollbar'
import useSearchOptions, { UseSearchOptionsParams } from '@components/Select/hooks/useSearchOptions'

// Utils
import getVirtualizedListHeight from '@utils/getVirtualizedListHeight'

/**
 * Hook for implements the logic of the Options component
 * @param {UseSearchOptionsParams} params Receive props of the Select component
 */
export default function useOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)
  const selectOptionsRef = useRef<HTMLUListElement | null>(null)
  const hasScrollbar = useCheckVerticalScrollbar({ elementRef: selectOptionsRef })

  // Define the select options style
  const selectOptionsStyle = useMemo(() => {
    const { defaultContainerHeight } = getVirtualizedListHeight()
    return { maxHeight: `${defaultContainerHeight}px` }
  }, [])

  return {
    ...searchData,
    hasScrollbar: hasScrollbar,
    selectOptionsRef: selectOptionsRef,
    selectOptionsStyle: selectOptionsStyle
  }
}

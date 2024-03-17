// Hooks
import { useCallback, useLayoutEffect } from 'react'
import useHeightForVirtualizedOption from '@hooks/useHeightForVirtualizedOption'
import useSearchOptions, { UseSearchOptionsParams } from '@components/Select/hooks/useSearchOptions'

// Utils
import getDefaultListHeight from '@components/Select/utils/getDefaultListHeight'

/**
 * Hook for implements the logic of the VirtualizedOptions component
 * @param {UseSearchOptionsParams} params Receive a 'initialOptions'
 */
export default function useVirtualizedOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)
  const { defaultOptionHeight, defaultContainerHeight } = getDefaultListHeight()

  const adjusts = useHeightForVirtualizedOption({
    defaultOptionHeight: defaultOptionHeight,
    defaultContainerHeight: defaultContainerHeight
  })
  // Callback for find the active item index
  const findActiveItemIndex = useCallback(() => {
    return params.initialOptions.findIndex((option) => option.value === params.selectedValue)
  }, [params.initialOptions])

  // Hacer scroll al elemento activo cuando cambie
  useLayoutEffect(() => {
    const activeIndex = findActiveItemIndex()

    if (activeIndex !== -1 && adjusts.listRef.current !== null) {
      adjusts.listRef.current.scrollToItem(activeIndex, 'start')
    }
  }, [])

  return { ...adjusts, ...searchData }
}

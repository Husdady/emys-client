// Hooks
import { useCallback } from 'react'
import useMounted from '@hooks/useMounted'
import useHeightForVirtualizedOption from '@hooks/useHeightForVirtualizedOption'
import useSearchOptions, {
  UseSearchOptionsParams
} from '@components/Select/Options/useSearchOptions'

// Constants
import { DEFAULT_LIST_HEIGHT, DEFAULT_OPTION_HEIGHT } from '@components/Select/constants'

/**
 * Hook for search virtualized options of the Select component
 * @param {UseSearchOptionsParams} params Receive a 'initialOptions'
 */
export default function useSearchVirtualizedOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)

  const adjusts = useHeightForVirtualizedOption({
    defaultOptionHeight: DEFAULT_OPTION_HEIGHT,
    defaultContainerHeight: DEFAULT_LIST_HEIGHT
  })

  // Callback for find the active item index
  const findActiveItemIndex = useCallback(() => {
    return params.initialOptions.findIndex((option) => option.value === params.selectedValue)
  }, [params.initialOptions])

  // Hacer scroll al elemento activo cuando cambie
  useMounted(() => {
    const activeIndex = findActiveItemIndex()

    if (activeIndex !== -1 && adjusts.listRef.current !== null) {
      adjusts.listRef.current.scrollToItem(activeIndex, 'start')
    }
  }, [])

  return { ...adjusts, ...searchData }
}

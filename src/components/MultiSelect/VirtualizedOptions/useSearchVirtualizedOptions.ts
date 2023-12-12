// Hooks
import { useMemo } from 'react'
import useMounted from '@hooks/useMounted'
import useHeightForVirtualizedOption from '@hooks/useHeightForVirtualizedOption'
import useSearchOptions, {
  UseSearchOptionsParams
} from '@components/MultiSelect/Options/useSearchOptions'

// Constants
import {
  MIN_OPTIONS_TO_SHOW,
  DEFAULT_LIST_HEIGHT,
  DEFAULT_OPTION_HEIGHT
} from '@components/MultiSelect/constants'

/**
 * Hook for search virtualized options of the MultiSelect component
 * @param {UseSearchOptionsParams} params Receive a 'initialOptions'
 */
export default function useSearchVirtualizedOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)

  const adjusts = useHeightForVirtualizedOption({
    defaultOptionHeight: DEFAULT_OPTION_HEIGHT,
    defaultContainerHeight: DEFAULT_LIST_HEIGHT
  })

  // Get index of the last active item
  const lastActiveItemIndex = useMemo(() => {
    const items = params.selectedValues
    if (!Array.isArray(items)) return -1

    const lastSelectedValue = items[items.length - 1]
    return params.initialOptions.findIndex((option) => option.value === lastSelectedValue)
  }, [params.initialOptions, params.selectedValues])

  // Hacer scroll al elemento activo cuando cambie
  useMounted(() => {
    if (
      lastActiveItemIndex !== -1 &&
      adjusts.listRef.current !== null &&
      params.initialOptions.length > MIN_OPTIONS_TO_SHOW + 1
    ) {
      adjusts.listRef.current.scrollToItem(lastActiveItemIndex, 'start')
    }
  }, [])

  return { ...adjusts, ...searchData }
}

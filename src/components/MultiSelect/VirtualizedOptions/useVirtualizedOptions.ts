// Hooks
import { useMemo } from 'react'
import useMounted from '@hooks/useMounted'
import useHeightForVirtualizedOption from '@hooks/useHeightForVirtualizedOption'
import useSearchOptions, {
  UseSearchOptionsParams
} from '@components/MultiSelect/hooks/useSearchOptions'

// Utils
import getVirtualizedListHeight from '@utils/getVirtualizedListHeight'

/**
 * Hook for implements the logic of the VirtualizedOptions component
 * @param {UseSearchOptionsParams} params Receive props of MultiSelect component
 */
export default function useVirtualizedOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)
  const { minOptionsToShow, defaultOptionHeight, defaultContainerHeight } =
    getVirtualizedListHeight()

  const adjusts = useHeightForVirtualizedOption({
    defaultOptionHeight: defaultOptionHeight,
    defaultContainerHeight: defaultContainerHeight
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
      params.initialOptions.length > minOptionsToShow + 1
    ) {
      adjusts.listRef.current.scrollToItem(lastActiveItemIndex, 'start')
    }
  }, [])

  return { ...adjusts, ...searchData }
}
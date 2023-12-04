// Hooks
import { useMemo, useCallback } from 'react'
import useMounted from '@hooks/useMounted'
import useHeightForVirtualizedOption from '@hooks/useHeightForVirtualizedOption'
import useSearchOptions, {
  UseSearchOptionsParams
} from '@components/Select/Options/useSearchOptions'

// Utils
import isMobile from '@utils/isMobile'

// Constants
import {
  MIN_OPTIONS_TO_SHOW,
  VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE,
  VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP
} from '@components/Select/constants'

/**
 * Hook for search virtualized options of the Select component
 * @param {UseSearchOptionsParams} params Receive a 'initialOptions'
 */
export default function useSearchVirtualizedOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)

  // Define height for each option
  const defaultOptionHeight = useMemo(
    () =>
      isMobile() ? VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE : VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP,
    []
  )

  // Define the list height
  const defaultContainerHeight = useMemo(
    () => defaultOptionHeight * MIN_OPTIONS_TO_SHOW + defaultOptionHeight / 2,
    [defaultOptionHeight]
  )

  const adjusts = useHeightForVirtualizedOption({
    defaultOptionHeight: defaultOptionHeight,
    defaultContainerHeight: defaultContainerHeight
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

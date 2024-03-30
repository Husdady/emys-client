// Librarys
import { useCallback, Dispatch, SetStateAction } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Constants
import { scrollIntoViewCenterArgs } from '@data/scroll'
import isEmptyArray from '@utils/isEmptyArray'

interface Params {
  values: string[]
  selectedValues?: string[]
  isTabletScreen: boolean
  isShowingOptions: boolean
  setValues: Dispatch<SetStateAction<string[]>>
}

/**
 * Hook for implements the mounted logic of the OptionsSelected component
 * @param {Params} params Receive a 'isTabletScreen' and 'isShowingOptions'
 */
export default function useMountedOptionsSelected({
  values,
  setValues,
  selectedValues,
  isTabletScreen,
  isShowingOptions
}: Params) {
  // Callback for make focus to the wrapper options
  const focusWrapperOptions = useCallback(() => {
    const wrapper = document.querySelector('.multi-select .wrapper-options')
    if (!wrapper) return

    wrapper.scrollIntoView(scrollIntoViewCenterArgs)
  }, [])

  useMounted(() => {
    if (isShowingOptions && !isTabletScreen) {
      focusWrapperOptions()
    }
  }, [isTabletScreen, isShowingOptions])

  useMounted(() => {
    const isNotEmptyValues = !isEmptyArray(values)
    const isEmptySelectedValues = Array.isArray(selectedValues) && isEmptyArray(selectedValues)

    if (isNotEmptyValues && isEmptySelectedValues) {
      setValues([])
    }
  }, [selectedValues])
}

// Librarys
import { useCallback, Dispatch, SetStateAction } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Utils
import isString from '@utils/isString'

// Constants
import { scrollIntoViewCenterArgs } from '@data/scroll'

interface Params {
  value?: string
  selectedValue?: string
  isTabletScreen: boolean
  isShowingOptions: boolean
  setValue: Dispatch<SetStateAction<string | undefined>>
}

/**
 * Hook for implements the mounted logic of the OptionSelected component
 * @param {Params} params Receive a 'value', 'setValue', 'selectedValue', 'isTabletScreen' and 'isShowingOptions'
 */
export default function useMountedOptionSelected({
  value,
  setValue,
  selectedValue,
  isTabletScreen,
  isShowingOptions
}: Params) {
  // Callback for make focus to the wrapper options
  const focusWrapperOptions = useCallback(() => {
    const wrapper = document.querySelector('.select .wrapper-options')
    if (!wrapper) return

    wrapper.scrollIntoView(scrollIntoViewCenterArgs)
  }, [])

  useMounted(() => {
    if (isString(selectedValue) && selectedValue !== value) {
      setValue(selectedValue)
    }
  }, [selectedValue])

  useMounted(() => {
    if (isShowingOptions && !isTabletScreen) {
      focusWrapperOptions()
    }
  }, [isTabletScreen, isShowingOptions])
}

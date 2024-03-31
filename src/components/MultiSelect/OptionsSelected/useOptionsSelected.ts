/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import useTabletScreen from '@hooks/screen/useTabletScreen'
import useMountedOptionsSelected from './useMountedOptionsSelected'
import { useMemo, useState, useCallback } from 'react'

// Types
import type { OnChangeOption, UseMultiSelectParams } from '@components/MultiSelect/types'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'

/**
 * Hook that implements the logic of the OptionsSelected component
 * @param {UseMultiSelectParams} props MultiSelect props
 */
export default function useMultiSelect({
  options,
  onChange,
  disabled,
  searchPlaceholder,
  canSearchOptions,
  selectedValues = []
}: UseMultiSelectParams) {
  const isTabletScreen = useTabletScreen()
  const [isShowingOptions, setShowingOptions] = useState(false)

  const [values, setValues] = useState(() => {
    if (Array.isArray(selectedValues)) return selectedValues
    return []
  })

  // Check if the selected options is hidden
  const hiddenClassName = useMemo(() => {
    // Check if wrapper is positioned at bottom
    const wrapperIsAtBottom = !document.querySelector('.wrapper-options.to-bottom')

    // Check if the option selected is hidden
    const isHidden =
      !isTabletScreen &&
      isShowingOptions &&
      canSearchOptions &&
      wrapperIsAtBottom &&
      !isEmptyArray(options)

    return isHidden ? 'opacity-0' : null
  }, [options, isTabletScreen, isShowingOptions, canSearchOptions])

  // Callback for hide options
  const hideOptions = useCallback(() => {
    if (!isShowingOptions) return
    setShowingOptions(false) // Hide options
  }, [isShowingOptions])

  // Callback for show/hide options
  const triggerOptions = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled === true) return

      e.stopPropagation() // Prevent click on the parent
      setShowingOptions((state) => !state)
    },
    [disabled]
  )

  // Check if the option is marked
  const isMarkedOption = useCallback(
    (value: string) => {
      // Validate 'selectedValue' is array
      if (!Array.isArray(values)) return false

      // Validate if the value exists in the selected values
      return values.includes(value)
    },
    [values]
  )

  // Callback 'change' when pick different value
  const handleOnChange = useCallback<OnChangeOption>(
    (params) => {
      const value = params?.value // Get value
      if (isUndefined(value)) return // Validate 'value' property of the params

      // Create copy of the values
      let valuesCopy = values.slice()

      // Check if the value exists in the state
      const isExistingValue = valuesCopy.some((item) => item === value)

      // Already exists the value
      if (isExistingValue) {
        // Filter the values that not equal to the received value
        valuesCopy = valuesCopy.filter((item) => item !== value)
      } else {
        valuesCopy.push(String(value)) // Add new value
      }

      onChange?.(valuesCopy) // Execute 'onChange' callback
      setValues(valuesCopy) // Update current values
    },
    [values, onChange]
  )

  // Define the options props
  const optionsProps = useMemo(
    () => ({
      options: options,
      selectedValues: values,
      onChange: handleOnChange,
      isMarkedOption: isMarkedOption,
      canSearchOptions: canSearchOptions,
      searchPlaceholder: searchPlaceholder
    }),
    [values, options, handleOnChange, isMarkedOption, searchPlaceholder, canSearchOptions]
  )

  useMountedOptionsSelected({
    values: values,
    setValues: setValues,
    selectedValues: selectedValues,
    isTabletScreen: isTabletScreen,
    isShowingOptions: isShowingOptions
  })

  return {
    values: values,
    hideOptions: hideOptions,
    optionsProps: optionsProps,
    isTabletScreen: isTabletScreen,
    triggerOptions: triggerOptions,
    onChangeOptions: handleOnChange,
    isMarkedOption: isMarkedOption,
    hiddenClassName: hiddenClassName,
    isShowingOptions: isShowingOptions
  }
}

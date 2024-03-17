/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import useTabletScreen from '@hooks/useTabletScreen'
import useMountedOptionsSelected from './useMountedOptionsSelected'
import { useMemo, useState, useCallback } from 'react'

// Types
import type { OnChangeOption, UseMultiSelectParams } from '@components/MultiSelect/types'

// Utils
import isUndefined from '@utils/isUndefined'

/**
 * Hook that implements the logic of the OptionsSelected component
 * @param {UseMultiSelectParams} props MultiSelect props
 */
export default function useMultiSelect({
  options,
  onChange,
  disabled,
  searchPalceholder,
  canSearchOptions,
  selectedValues = []
}: UseMultiSelectParams) {
  const isTabletScreen = useTabletScreen()
  const [isShowingOptions, setShowingOptions] = useState(false)

  const [values, setValues] = useState(() => {
    if (Array.isArray(selectedValues)) return selectedValues
    return []
  })

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
      searchPalceholder: searchPalceholder
    }),
    [values, options, handleOnChange, isMarkedOption, searchPalceholder, canSearchOptions]
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
    isShowingOptions: isShowingOptions
  }
}

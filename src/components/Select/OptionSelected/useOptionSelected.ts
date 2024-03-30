/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import useTabletScreen from '@hooks/screen/useTabletScreen'
import useMountedOptionSelected from './useMountedOptionSelected'
import { useRef, useMemo, useState, useCallback } from 'react'

// Types
import type { UseSelectParams } from '@components/Select/types'
import type { OnChangeOption } from '@components/Select/VirtualizedOptions/types'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'

/**
 * Hook that implements the logic of the OptionSelected component
 * @param {UseSelectParams} props Select props
 */
export default function useOptionSelected({
  options,
  onChange,
  emptyText,
  selectedValue,
  canSearchOptions,
  searchPalceholder,
  enableVirtualization,
  noSelectionLabel = 'Selecciona una opción'
}: UseSelectParams) {
  const isTabletScreen = useTabletScreen()
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(selectedValue)
  const [isShowingOptions, setShowingOptions] = useState(false)

  // Check if the selected option is hidden
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

  // Define label
  const label = useMemo(() => {
    // Find default option
    const item = options.find((option) => option.value === selectedValue || option.value === value)

    // Return founded item
    if (!isUndefined(item)) return item.label

    // Return default label
    return noSelectionLabel
  }, [options, value, selectedValue, noSelectionLabel])

  // Callback for hide options
  const hideOptions = useCallback(() => {
    if (!isShowingOptions) return
    setShowingOptions(false) // Hide options
  }, [isShowingOptions])

  // Callback for show/hide options
  const triggerOptions = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation() // Prevent click on the parent
    setShowingOptions((state) => !state)
  }, [])

  // Callback 'change' when pick different value
  const handleOnChange = useCallback<OnChangeOption>(
    (option, e) => {
      e?.stopPropagation() // Prevent propagation to parent
      setShowingOptions(false) // Hide options

      if (value === option.value) return // Same value selected
      onChange?.(option) // Execute callback
      setValue(option.value) // Update current value
    },
    [value, onChange]
  )

  // Define the options props
  const optionsProps = useMemo(
    () => ({
      options: options,
      emptyText: emptyText,
      selectedValue: value,
      onChange: handleOnChange,
      hideOptions: hideOptions,
      canSearchOptions: canSearchOptions,
      searchPalceholder: searchPalceholder,
      enableVirtualization: enableVirtualization
    }),
    [
      value,
      options,
      emptyText,
      hideOptions,
      handleOnChange,
      searchPalceholder,
      canSearchOptions,
      enableVirtualization
    ]
  )

  useMountedOptionSelected({
    value: value,
    setValue: setValue,
    selectedValue: selectedValue,
    isTabletScreen: isTabletScreen,
    isShowingOptions: isShowingOptions
  })

  return {
    ref: ref,
    label: label,
    value: value,
    hideOptions: hideOptions,
    optionsProps: optionsProps,
    onChangeOption: handleOnChange,
    triggerOptions: triggerOptions,
    hiddenClassName: hiddenClassName,
    isShowingOptions: isShowingOptions
  }
}

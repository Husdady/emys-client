/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useRef, useMemo, useState, useCallback } from 'react'

// Types
import type { UseSelectParams } from '@components/Select/types'
import type { OnChangeOption } from '@components/Select/VirtualizedOptions/types'

// Utils
import isUndefined from '@utils/isUndefined'

/**
 * Hook that implements the logic of the Select component
 * @param {UseSelectParams} props Select props
 */
export default function useSelect({
  options,
  onChange,
  emptyText,
  selectedValue,
  noSelectionLabel,
  canSearchOptions,
  searchPalceholder,
  enableVirtualization
}: UseSelectParams) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(selectedValue)
  const [isShowingOptions, setShowingOptions] = useState(false)

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

  return {
    ref: ref,
    label: label,
    value: value,
    hideOptions: hideOptions,
    optionsProps: optionsProps,
    onChangeOption: handleOnChange,
    triggerOptions: triggerOptions,
    isShowingOptions: isShowingOptions
  }
}

// Librarys
import React from 'react'

// Hooks
import useScrollToLastSelectedValue from '@components/MultiSelect/hooks/useScrollToLastSelectedValue'

// Interfaces
import { Option, MultiSelectProps } from '@components/MultiSelect/interfaces'

// Utils
import isEmptyString from '@utils/isEmptyString'

export interface UseSearchOptionsParams
  extends Pick<MultiSelectProps, 'selectedValues' | 'canSearchOptions' | 'enableVirtualization'> {
  initialOptions: MultiSelectProps['options']
}

/**
 * Hook for search options of the MultiSelect component
 * @param {UseSearchOptionsParams} params Receive a 'initialOptions'
 */
export default function useSearchOptions({
  selectedValues,
  canSearchOptions,
  initialOptions = [],
  enableVirtualization
}: UseSearchOptionsParams) {
  const [searchValue, setSearchValue] = React.useState('')
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)

  // Define the filtered options
  const filteredOptions = React.useMemo(() => {
    if (canSearchOptions !== true) return initialOptions

    // Return the filtered options
    return initialOptions.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [searchValue])

  // Callback for clear the search value
  const handleClear = React.useCallback(() => {
    setSearchValue('')
  }, [])

  // Callback for clear the search value
  const handleSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }, [])

  // Callback for define if the last option is actived
  const isLastActived = React.useCallback(
    (item: Option) => {
      if (!Array.isArray(selectedValues)) return false

      const lastItemInArray = selectedValues?.slice(-1)
      const lastItem = Array.isArray(lastItemInArray) ? lastItemInArray[0] ?? '' : ''
      return lastItem === item.value
    },
    [selectedValues]
  )

  useScrollToLastSelectedValue({ ref: wrapperRef, enableVirtualization: enableVirtualization })

  return {
    wrapperRef: wrapperRef,
    searchValue: searchValue,
    handleClear: handleClear,
    handleSearch: handleSearch,
    isLastActived: isLastActived,
    filteredOptions: filteredOptions,
    isShowingClearIcon: !isEmptyString(searchValue)
  }
}

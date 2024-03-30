// Librarys
import React from 'react'

// Hooks
import useFixPositionOfFloatOptions from '@hooks/useFixPositionOfFloatOptions'
import useScrollToSelectedValue from '@components/Select/hooks/useScrollToSelectedValue'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Utils
import isObject from '@utils/isObject'
import isEmptyString from '@utils/isEmptyString'

export interface UseSearchOptionsParams
  extends Pick<SelectProps, 'selectedValue' | 'canSearchOptions' | 'enableVirtualization'> {
  initialOptions: SelectProps['options']
}

/**
 * Hook for search options of the Select component
 * @param {UseSearchOptionsParams} params Receive a 'initialOptions'
 */
export default function useSearchOptions({
  initialOptions = [],
  canSearchOptions,
  enableVirtualization
}: UseSearchOptionsParams) {
  const [searchValue, setSearchValue] = React.useState('')
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)

  // Define the filtered options
  const filteredOptions = React.useMemo(() => {
    if (canSearchOptions !== true) return initialOptions

    // Return the filtered options
    return initialOptions
      .filter((option) => isObject(option) && !('markup' in option))
      .filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, initialOptions])

  // Callback for clear the search value
  const handleClear = React.useCallback(() => setSearchValue(''), [])

  // Callback for clear the search value
  const handleSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }, [])

  useFixPositionOfFloatOptions({ ref: wrapperRef })

  useScrollToSelectedValue({
    ref: wrapperRef,
    enableVirtualization: enableVirtualization
  })

  return {
    wrapperRef: wrapperRef,
    handleClear: handleClear,
    searchValue: searchValue,
    handleSearch: handleSearch,
    filteredOptions: filteredOptions,
    isShowingClearIcon: !isEmptyString(searchValue)
  }
}

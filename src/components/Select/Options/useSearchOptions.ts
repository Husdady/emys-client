// Librarys
import React, { useMemo } from 'react'

// Hooks
import useScrollToSelectedValue from '@components/Select/hooks/useScrollToSelectedValue'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Utils
import isObject from '@utils/isObject'
import isEmptyString from '@utils/isEmptyString'
import getDefaultListHeight from '@components/Select/utils/getDefaultListHeight'

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
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [searchValue, setSearchValue] = React.useState('')

  // Define the select options style
  const selectOptionsStyle = React.useMemo(() => {
    const { defaultListHeight } = getDefaultListHeight()
    return { maxHeight: `${defaultListHeight}px` }
  }, [])

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

  useScrollToSelectedValue({
    ref: ref,
    enableVirtualization: enableVirtualization
  })

  return {
    wrapperRef: ref,
    searchValue: searchValue,
    handleClear: handleClear,
    handleSearch: handleSearch,
    filteredOptions: filteredOptions,
    selectOptionsStyle: selectOptionsStyle,
    isShowingClearIcon: !isEmptyString(searchValue)
  }
}

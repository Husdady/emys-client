// Librarys
import React from 'react'

// Hooks
import useScrollToSelectedValue from '@components/Select/hooks/useScrollToSelectedValue'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Utils
import isObject from '@utils/isObject'

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

  // Define flag for show the clear icon in the seeker
  const isShowingClearIcon = React.useMemo(() => {
    return searchValue.length > 0
  }, [searchValue])

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
    isShowingClearIcon: isShowingClearIcon
  }
}

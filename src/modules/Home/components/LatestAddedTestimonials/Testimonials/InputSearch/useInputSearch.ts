// Librarys
import { useState, useCallback, ChangeEvent } from 'react'

// Interfaces
import { InputSearchProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the InputSearch component
 * @param {InputSearchProps} params Receive props of the InputSearch component
 */
export default function useInputSearch({ setResults, testimonials }: InputSearchProps) {
  const [searchValue, setSearchValue] = useState('')

  // Callback for clear the search value
  const handleClearSearchValue = useCallback(() => {
    setSearchValue('')
    setResults(testimonials)
  }, [testimonials])

  // Callback for search sellers
  const handleSearchProducts = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value // Get the input value
      setSearchValue(value)

      const lowerValue = value.toLowerCase() // Get input value in lowercase

      // Filter the new results
      const newResults = testimonials.filter((testimony) => {
        // Define the fields that can search
        const fieldsForSearch = [
          testimony.author,
          testimony.region?.region,
          testimony.country?.country,
          testimony.province?.province,
          testimony.district?.district
        ].map((item) => String(item).toLowerCase())

        const hasResult = fieldsForSearch.some((item) => item.includes(lowerValue))
        const hasSomeValuePart = fieldsForSearch.some((item) => [lowerValue].includes(item))

        return hasResult || hasSomeValuePart
      })

      // Define the new results
      const results = isEmptyArray(newResults) ? testimonials : newResults
      setResults(results) // Update results
    },
    [testimonials]
  )

  return {
    searchValue: searchValue,
    handleSearchProducts: handleSearchProducts,
    handleClearSearchValue: handleClearSearchValue,
    isShowingClearIcon: !isEmptyString(searchValue)
  }
}

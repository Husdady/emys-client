// Librarys
import { useState, useCallback, ChangeEvent } from 'react'

// Hooks
import useAnimationInView from '@hooks/useAnimationInView'

// Interfaces
import { InputSearchProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the InputSearch component
 * @param {InputSearchProps} params Receive props of the InputSearch component
 */
export default function useInputSearch({ sellers, setResults }: InputSearchProps) {
  const [searchValue, setSearchValue] = useState('')
  const { ref, animationClassName } = useAnimationInView('animate__fadeInUp')

  // Callback for clear the search value
  const handleClearSearchValue = useCallback(() => {
    setSearchValue('')
    setResults(sellers)
  }, [sellers])

  // Callback for search sellers
  const handleSearchProducts = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value // Get the input value
      setSearchValue(value)

      const lowerValue = value.toLowerCase() // Get input value in lowercase

      // Filter the new results
      const newResults = sellers.filter((seller) => {
        // Define the fields that can search
        const fieldsForSearch = [
          seller.fullname,
          seller.dni,
          seller.ruc,
          seller.email,
          seller.phone
        ].map((item) => String(item).toLowerCase())

        const hasResult = fieldsForSearch.some((item) => item.includes(lowerValue))
        const hasSomeValuePart = fieldsForSearch.some((item) => [lowerValue].includes(item))

        return hasResult || hasSomeValuePart
      })

      // Define the new results
      const results = isEmptyArray(newResults) ? sellers : newResults
      setResults(results) // Update results
    },
    [sellers]
  )

  return {
    ref: ref,
    searchValue: searchValue,
    animationClassName: animationClassName,
    handleSearchProducts: handleSearchProducts,
    isShowingClearIcon: !isEmptyString(searchValue),
    handleClearSearchValue: handleClearSearchValue
  }
}

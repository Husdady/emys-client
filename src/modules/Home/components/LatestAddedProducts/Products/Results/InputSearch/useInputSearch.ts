// Librarys
import { useState, useCallback, ChangeEvent } from 'react'

// Hooks
import useAnimationInView from '@hooks/useAnimationInView'

// Interfaces
import { InputSearchProps } from './interfaces'

// Utils
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the InputSearch component
 * @param {InputSearchProps} params Receive props of the InputSearch component
 */
export default function useInputSearch({ products, setResults }: InputSearchProps) {
  const [searchValue, setSearchValue] = useState('')
  const { ref, animationClassName } = useAnimationInView('animate__fadeInUp')

  // Callback for clear the search value
  const handleClearSearchValue = useCallback(() => {
    setSearchValue('')
    setResults(products)
  }, [products])

  // Callback for search products
  const handleSearchProducts = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value // Get the input value
      setSearchValue(value)

      const lowerValue = value.toLowerCase() // Get input value in lowercase

      // Filter the new results
      const newResults = products.filter((product) => {
        // Define the fields that can search
        const fieldsForSearch = [product.name, product.description, product.price, product.sku].map(
          (item) => String(item).toLowerCase()
        )

        const hasResult = fieldsForSearch.some((item) => item.includes(lowerValue))
        const hasSomeValuePart = fieldsForSearch.some((item) => [lowerValue].includes(item))
        console.log({ hasResult, hasSomeValuePart, lowerValue, fieldsForSearch })
        return hasResult || hasSomeValuePart
      })

      setResults(newResults)
    },
    [products]
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

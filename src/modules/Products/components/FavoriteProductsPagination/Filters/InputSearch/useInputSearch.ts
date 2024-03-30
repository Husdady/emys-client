// Librarys
import { useState, useCallback, ChangeEvent } from 'react'
import {
  showFloatInfoMessage,
  hideFloatMessageByKey,
  showFloatLoadingMessage,
  showFloatWarningMessage
} from '@libs/antd/message'

// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import useFiltersQuery from '@hooks/useFiltersQuery'
import useValidateSearchValue from '@components/MainSeeker/useValidateSearchValue'
import { useLazyGetFavoriteProductsQuery } from '@modules/Products/api/graphql'

// Interfaces
import { FavoriteProductsPaginationArgs } from '@modules/Products/api/interfaces'

// Utils
import isEmptyString from '@utils/isEmptyString'
import { showMask, hideMask } from '@utils/mask'

// Constants
import { QUERY } from '@libs/graphql/constants'
import { PARAMS } from '@modules/Products/api/constants'
import {
  LOADING_FILTERS,
  FILTERING_PRODUCTS,
  ERROR_MESSAGE_FILTERS,
  SUCCESS_MESSAGE_FILTERS
} from '@modules/Products/components/ProductsFilters/useProductsFilters/constants'

const CLEAR_VALUE_SLUG = 'clear-value'

/**
 * Hook for implements the logic of the InputSearch component
 */
export default function useInputSearch() {
  const { user } = useAuth()
  const [trigger] = useLazyGetFavoriteProductsQuery({}) // Get trigger callback

  // Get query filters
  const { query, createQueryParams } = useFiltersQuery<FavoriteProductsPaginationArgs>({
    queryParamsFields: PARAMS
  })

  const [searchValue, setSearchValue] = useState('')

  // Callback for clear the search value
  const handleFilter = useCallback(
    async (slug?: string) => {
      // Prevent make request if has invalid search value
      if (!slug && ((!query.q && isEmptyString(searchValue)) || searchValue === query.q)) return

      showMask() // Show mask in the screen
      showFloatLoadingMessage(LOADING_FILTERS) // Show float message

      // Define arguments for the filtering
      const args: FavoriteProductsPaginationArgs = {
        page: QUERY.page,
        favoriteProductsId: user?.favoriteProductsId ?? [],
        q: slug === CLEAR_VALUE_SLUG || isEmptyString(searchValue) ? undefined : searchValue
      }

      const response = await trigger(args) // Filter products
      hideFloatMessageByKey(FILTERING_PRODUCTS) // Hide float message
      hideMask() // Hide mask from the screen

      // Show float error message
      if ('error' in response) {
        return showFloatWarningMessage(ERROR_MESSAGE_FILTERS)
      }

      createQueryParams(args as any) // Create query params

      // Show float success message
      return showFloatInfoMessage(SUCCESS_MESSAGE_FILTERS)
    },
    [query, searchValue]
  )

  // Callback for handle the 'Enter' key pressed
  const handlePressEnter = useCallback(() => {
    void handleFilter()
  }, [handleFilter])

  // Callback for search sellers
  const handleUpdateValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }, [])

  // Callback for clear the search value
  const handleClearSearchValue = useCallback(() => {
    setSearchValue('')
    void handleFilter?.(CLEAR_VALUE_SLUG)
  }, [handleFilter])

  useValidateSearchValue<FavoriteProductsPaginationArgs>({
    query: query,
    searchValue: searchValue,
    setSearchValue: setSearchValue
  })

  return {
    searchValue: searchValue,
    handlePressEnter: handlePressEnter,
    handleUpdateValue: handleUpdateValue,
    handleClearSearchValue: handleClearSearchValue,
    isShowingClearIcon: !isEmptyString(searchValue)
  }
}

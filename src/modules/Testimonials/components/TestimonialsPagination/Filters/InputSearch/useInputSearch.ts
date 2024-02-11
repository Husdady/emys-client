// Librarys
import { useState, useCallback, ChangeEvent } from 'react'
import {
  showFloatInfoMessage,
  hideFloatMessageByKey,
  showFloatLoadingMessage,
  showFloatWarningMessage
} from '@libs/antd/message'

// Hooks
import useFiltersQuery from '@hooks/useFiltersQuery'
import { useLazyGetTestimonialsQuery } from '@modules/Testimonials/api/graphql'

// Types
import type { TestimonialsPaginationArgs } from '@modules/Testimonials/api/types'

// Interfaces
import { PaginationArgs } from '@libs/graphql/interfaces'

// Utils
import isEmptyString from '@utils/isEmptyString'
import { showMask, hideMask } from '@utils/mask'

// Constants
import { QUERY } from '@libs/graphql/constants'
import { PARAMS } from '@modules/Testimonials/api/constants'
import {
  LOADING_FILTERS,
  ERROR_MESSAGE_FILTERS,
  FILTERING_TESTIMONIALS,
  SUCCESS_MESSAGE_FILTERS
} from '@modules/Testimonials/components/TestimonialsFilters/useTestimonialsFilters/constants'

export const CLEAR_VALUE_SLUG = 'clear-value'

/**
 * Hook for implements the logic of the InputSearch component
 */
export default function useInputSearch() {
  const [trigger] = useLazyGetTestimonialsQuery({}) // Get trigger callback

  // Get query filters
  const { query, createQueryParams } = useFiltersQuery<TestimonialsPaginationArgs>({
    queryParamsFields: PARAMS
  })

  const [searchValue, setSearchValue] = useState('')

  // Callback for clear the search value
  const handleFilter = useCallback(
    async (slug?: string) => {
      // Prevent make request if has invalid search value
      if ((!query.q && isEmptyString(searchValue)) || searchValue === query.q) return

      showMask() // Show mask in the screen
      showFloatLoadingMessage(LOADING_FILTERS) // Show float message

      // Define arguments for the filtering
      const args: PaginationArgs = {
        page: QUERY.page,
        q: slug === CLEAR_VALUE_SLUG || isEmptyString(searchValue) ? undefined : searchValue
      }

      const response = await trigger(args) // Filter testimonials
      hideFloatMessageByKey(FILTERING_TESTIMONIALS) // Hide float message
      hideMask() // Hide mask from the screen

      // Show float error message
      if ('error' in response) {
        return showFloatWarningMessage(ERROR_MESSAGE_FILTERS)
      }

      createQueryParams(args as Record<string, unknown>) // Create query params
      if (isEmptyString(searchValue)) return // Some filter not exists

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

  return {
    searchValue: searchValue,
    handlePressEnter: handlePressEnter,
    handleUpdateValue: handleUpdateValue,
    handleClearSearchValue: handleClearSearchValue,
    isShowingClearIcon: !isEmptyString(searchValue)
  }
}

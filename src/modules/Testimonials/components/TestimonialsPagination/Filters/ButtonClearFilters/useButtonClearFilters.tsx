// Librarys
import {
  showFloatInfoMessage,
  hideFloatMessageByKey,
  showFloatLoadingMessage,
  showFloatWarningMessage
} from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'
import { useLazyGetTestimonialsQuery } from '@modules/Testimonials/api/graphql'
import useFiltersQuery from '@hooks/useFiltersQuery'

// Types
import type { TestimonialsPaginationArgs } from '@modules/Testimonials/api/types'

// Utils
import { showMask, hideMask } from '@utils/mask'

// Constants
import { PARAMS } from '@modules/Testimonials/api/constants'
import { ERROR_MESSAGE, SUCCESS_MESSAGE, CLEANING_FILTERS, CLEAR_TESTIMONIALS } from './constants'

/**
 * Hook for implements the logic of the ButtonClearFilters component
 */
export default function useButtonClearFilters() {
  const [trigger] = useLazyGetTestimonialsQuery({}) // Get trigger callback

  // Get query filters
  const { query, deleteQueryParam } = useFiltersQuery<TestimonialsPaginationArgs>({
    queryParamsFields: PARAMS
  })

  // Event click on button for show a modal of the Testimonials filters
  const clear = useCallback(() => {
    PARAMS.forEach((key) => {
      deleteQueryParam(key)
    })
  }, [])

  return {
    clear: clear
  }
}

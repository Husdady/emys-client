// Librarys
import { showFloatInfoMessage, showFloatErrorMessage } from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'
import { useLazyGetTestimonialsQuery } from '@modules/Testimonials/api/graphql'
import useReloadUbigeo from '@modules/Ubigeo/hooks/useReloadUbigeo'
import useFiltersQuery from '@hooks/useFiltersQuery'

// Constants
import { PaginationArgs } from '@libs/graphql/interfaces'
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './constants'
import { ALLOWED_QUERY_PARAMS } from '@libs/graphql/constants'
import { DEFAULT_QUERY } from '@modules/Testimonials/api/constants'

/**
 * Hook that allow to reload the current testimonials
 */
export default function useReloadTestimonials() {
  const { reloadUbigeo } = useReloadUbigeo()
  const [trigger, result] = useLazyGetTestimonialsQuery({}) // Trigger testimonials

  // Get query filters
  const { updateQueryParams } = useFiltersQuery<PaginationArgs>({
    defaultQueryParams: DEFAULT_QUERY,
    queryParamsFields: ALLOWED_QUERY_PARAMS
  })

  // Callback that reload current testimonials
  const handleReloadTestimonials = useCallback(async () => {
    updateQueryParams(DEFAULT_QUERY as Record<string, unknown>) // Clear query params

    reloadUbigeo() // Reload Ubigeo
    const res = await trigger(DEFAULT_QUERY) // Refetch categories

    // Show error message on the screen
    if ('error' in res) return showFloatErrorMessage(ERROR_MESSAGE)
    return showFloatInfoMessage(SUCCESS_MESSAGE) // Show info message on the screen
  }, [])

  return {
    ...result,
    onReload: handleReloadTestimonials
  }
}

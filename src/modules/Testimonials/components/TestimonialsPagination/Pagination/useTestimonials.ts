// Librarys
import { useCallback } from 'react'

// Hooks
import useFiltersQuery from '@hooks/useFiltersQuery'
import useDocumentCount from '@hooks/useDocumentCount'
import { useGetTestimonialsQuery } from '@modules/Testimonials/api/graphql'

// Interfaces
import { PaginationArgs } from '@libs/graphql/interfaces'
import { PaginationParams } from '@components/Pagination/interfaces'

// Constants
import { TESTIMONIALS_COUNT } from './Testimonials/constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Testimonials/api/constants'

/**
 * Hook that implements the logic of the Testimonials Pagination component
 */
export default function useTestimonialsPagination() {
  // Get filters query
  const { query, createQueryParams } = useFiltersQuery<PaginationArgs>({
    queryParamsFields: PARAMS,
    defaultQueryParams: DEFAULT_QUERY
  })

  // Get social networks query
  const { data, isError, isFetching } = useGetTestimonialsQuery(query)

  // Paginate social networks
  const changePage = useCallback(({ page }: PaginationParams) => {
    return createQueryParams({ page: page })
  }, [])

  // Auto increment the count of the Testimonials document
  useDocumentCount({
    autoIncreaseCount: true,
    data: data?.testimonials?.data,
    filterId: TESTIMONIALS_COUNT
  })

  return {
    data: data,
    isError: isError,
    isFetching: isFetching,
    changePage: changePage
  }
}

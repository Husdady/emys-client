// Librarys
import { useCallback } from 'react'

// Hooks
import useFiltersQuery from '@hooks/useFiltersQuery'
import useDocumentCount from '@root/src/hooks/useDocumentCount'
import { useGetSellersQuery } from '@modules/Sellers/api/graphql'

// Interfaces
import { PaginationArgs } from '@libs/graphql/interfaces'
import { PaginationParams } from '@components/Pagination/interfaces'

// Constants
import { SELLERS_COUNT } from './Sellers/constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Sellers/api/constants'

/**
 * Hook that implements the logic of the Sellers Pagination component
 */
export default function useSellersPagination() {
  // Get filters query
  const { query, createQueryParams } = useFiltersQuery<PaginationArgs>({
    queryParamsFields: PARAMS,
    defaultQueryParams: DEFAULT_QUERY
  })

  // Get Sellers query
  const { data, isError, isFetching } = useGetSellersQuery(query)

  // Paginate Sellers
  const changePage = useCallback(({ page }: PaginationParams) => {
    return createQueryParams({ page: page })
  }, [])

  // Auto increment the count of the Sellers document
  useDocumentCount({
    filterId: SELLERS_COUNT,
    autoIncreaseCount: true,
    data: data?.sellers?.data
  })

  return {
    data: data,
    isError: isError,
    isFetching: isFetching,
    changePage: changePage
  }
}

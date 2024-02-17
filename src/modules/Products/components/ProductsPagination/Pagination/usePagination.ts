// Librarys
import { useCallback } from 'react'

// Hooks
import useFiltersQuery from '@hooks/useFiltersQuery'
import useDocumentCount from '@hooks/useDocumentCount'
import { useGetProductsQuery } from '@modules/Products/api/graphql'

// Interfaces
import { PaginationParams } from '@components/Pagination/interfaces'
import { ProductsPaginationArgs } from '@modules/Products/api/interfaces'

// Constants
import { PRODUCTS_COUNT } from './Products/constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Products/api/constants'

/**
 * Hook that implements the logic of the Products Pagination component
 */
export default function useProductsPagination() {
  // Get filters query
  const { query, createQueryParams } = useFiltersQuery<ProductsPaginationArgs>({
    queryParamsFields: PARAMS,
    defaultQueryParams: DEFAULT_QUERY
  })

  // Get Products query
  const { data, isError, isFetching } = useGetProductsQuery(query)

  // Paginate Products
  const changePage = useCallback(({ page }: PaginationParams) => {
    return createQueryParams({ page: page })
  }, [])

  // Auto increment the count of the Products document
  useDocumentCount({
    autoIncreaseCount: true,
    filterId: PRODUCTS_COUNT,
    data: data?.products?.data
  })

  return {
    data: data,
    isError: isError,
    isFetching: isFetching,
    changePage: changePage
  }
}

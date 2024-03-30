// Librarys
import { useCallback } from 'react'

// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import useFiltersQuery from '@hooks/useFiltersQuery'
import useDocumentCount from '@hooks/useDocumentCount'
import { useGetFavoriteProductsQuery } from '@modules/Products/api/graphql'

// Interfaces
import { PaginationParams } from '@components/Pagination/interfaces'
import { FavoriteProductsPaginationArgs } from '@modules/Products/api/interfaces'

// Constants
import { FAVORITE_PRODUCTS_COUNT } from './FavoriteProducts/constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Products/api/constants'

/**
 * Hook that implements the logic of the Favorite Products Pagination component
 */
export default function useFavoriteProductsPagination() {
  const { user } = useAuth()

  // Get filters query
  const { query, createQueryParams } = useFiltersQuery<FavoriteProductsPaginationArgs>({
    queryParamsFields: PARAMS,
    defaultQueryParams: { ...DEFAULT_QUERY, favoriteProductsId: user?.favoriteProductsId ?? [] }
  })

  // Get Products query
  const { data, isError, isFetching } = useGetFavoriteProductsQuery({
    ...query,
    favoriteProductsId: user?.favoriteProductsId ?? []
  })

  // Paginate Products
  const changePage = useCallback(({ page }: PaginationParams) => {
    return createQueryParams({ page: page })
  }, [])

  // Auto increment the count of the Products document
  useDocumentCount({
    autoIncreaseCount: true,
    filterId: FAVORITE_PRODUCTS_COUNT,
    data: data?.myFavoriteProducts?.data
  })

  return {
    data: data,
    isError: isError,
    isFetching: isFetching,
    changePage: changePage
  }
}

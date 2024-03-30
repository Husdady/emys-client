// Librarys
import { showFloatInfoMessage, showFloatErrorMessage } from '@libs/antd/message'

// Hooks
import { useCallback, useMemo } from 'react'
import { useLazyGetFavoriteProductsQuery } from '@modules/Products/api/graphql'
import useFiltersQuery from '@hooks/useFiltersQuery'
import useReloadQuery from '@hooks/useReloadQuery'
import useAuth from '@modules/Auth/states/auth/useAuth'

// Interfaces
import { FavoriteProductsPaginationArgs } from '@modules/Products/api/interfaces'

// Constants
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Products/api/constants'
import { COUNTRIES_KEY, CATEGORIES_KEY } from '@config/store/graphql/constants'

/**
 * Hook that allow to reload the current products
 */
export default function useReloadProducts() {
  const { user } = useAuth()
  const reload = useReloadQuery()
  const [trigger, result] = useLazyGetFavoriteProductsQuery({}) // Trigger products

  // Define the default query params
  const defaultQueryParams = useMemo(
    () => ({
      ...DEFAULT_QUERY,
      favoriteProductsId: user?.favoriteProductsId ?? []
    }),
    [user?.favoriteProductsId]
  )

  // Get query filters
  const { updateQueryParams } = useFiltersQuery<FavoriteProductsPaginationArgs>({
    queryParamsFields: PARAMS,
    defaultQueryParams: defaultQueryParams
  })

  // Callback that reload current Products
  const handleReloadProducts = useCallback(async () => {
    updateQueryParams(defaultQueryParams) // Clear query params
    reload([COUNTRIES_KEY, CATEGORIES_KEY]) // Reload Countries and Categories
    const res = await trigger(defaultQueryParams) // Refetch products

    // Show error message on the screen
    if ('error' in res) return showFloatErrorMessage(ERROR_MESSAGE)
    return showFloatInfoMessage(SUCCESS_MESSAGE) // Show info message on the screen
  }, [defaultQueryParams])

  return {
    ...result,
    onReload: handleReloadProducts
  }
}

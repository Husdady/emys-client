// Librarys
import { showFloatInfoMessage, showFloatErrorMessage } from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'
import { useLazyGetProductsQuery } from '@modules/Products/api/graphql'
import useFiltersQuery from '@hooks/useFiltersQuery'
import useReloadQuery from '@hooks/useReloadQuery'

// Interfaces
import { ProductsPaginationArgs } from '@modules/Products/api/interfaces'

// Constants
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Products/api/constants'
import { COUNTRIES_KEY, CATEGORIES_KEY } from '@config/store/graphql/constants'

/**
 * Hook that allow to reload the current products
 */
export default function useReloadProducts() {
  const reload = useReloadQuery()
  const [trigger, result] = useLazyGetProductsQuery({}) // Trigger products

  // Get query filters
  const { updateQueryParams } = useFiltersQuery<ProductsPaginationArgs>({
    queryParamsFields: PARAMS,
    defaultQueryParams: DEFAULT_QUERY
  })

  // Callback that reload current Products
  const handleReloadProducts = useCallback(async () => {
    // Define the new query state
    const newQueryState = DEFAULT_QUERY

    updateQueryParams(newQueryState) // Clear query params
    reload([COUNTRIES_KEY, CATEGORIES_KEY]) // Reload Countries and Categories
    const res = await trigger(newQueryState as Record<string, unknown>) // Refetch products

    // Show error message on the screen
    if ('error' in res) return showFloatErrorMessage(ERROR_MESSAGE)
    return showFloatInfoMessage(SUCCESS_MESSAGE) // Show info message on the screen
  }, [])

  return {
    ...result,
    onReload: handleReloadProducts
  }
}

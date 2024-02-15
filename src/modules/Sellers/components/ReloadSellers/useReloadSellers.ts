// Librarys
import { showFloatInfoMessage, showFloatErrorMessage } from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'
import { useLazyGetSellersQuery } from '@modules/Sellers/api/graphql'
import useReloadUbigeo from '@modules/Ubigeo/hooks/useReloadUbigeo'
import useFiltersQuery from '@hooks/useFiltersQuery'

// Interfaces
import { SellersPaginationArgs } from '@modules/Sellers/api/interfaces'

// Constants
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Sellers/api/constants'

/**
 * Hook that allow to reload the current sellers
 */
export default function useReloadSellers() {
  const { reloadUbigeo } = useReloadUbigeo()
  const [trigger, result] = useLazyGetSellersQuery({}) // Trigger sellers

  // Get query filters
  const { updateQueryParams } = useFiltersQuery<SellersPaginationArgs>({
    queryParamsFields: PARAMS,
    defaultQueryParams: DEFAULT_QUERY
  })

  // Callback that reload current Sellers
  const handleReloadSellers = useCallback(async () => {
    updateQueryParams(DEFAULT_QUERY as Record<string, unknown>) // Clear query params

    reloadUbigeo() // Reload Ubigeo
    const res = await trigger(DEFAULT_QUERY) // Refetch sellers

    // Show error message on the screen
    if ('error' in res) return showFloatErrorMessage(ERROR_MESSAGE)
    return showFloatInfoMessage(SUCCESS_MESSAGE) // Show info message on the screen
  }, [])

  return {
    ...result,
    onReload: handleReloadSellers
  }
}

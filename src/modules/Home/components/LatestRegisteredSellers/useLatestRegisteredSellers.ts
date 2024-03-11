// Hooks
import { useMemo } from 'react'
import { useGetLatestSellersQuery } from '@modules/Home/api/getLatestSellers/graphql'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { LIMIT_LATEST_SELLERS } from './constants'
import { THREE_MINUTES } from '@data/interval'

/**
 * Hook for implements the logic of the LatestRegisteredSellers component
 */
export default function useLatestRegisteredSellers() {
  const queryData = useGetLatestSellersQuery(
    { populate: true, limit: LIMIT_LATEST_SELLERS },
    { refetchOnReconnect: true, refetchOnMountOrArgChange: true, pollingInterval: THREE_MINUTES }
  )

  // Define the latest sellers
  const sellers = useMemo(
    () => queryData?.data?.latestSellers ?? [],
    [queryData?.data?.latestSellers]
  )

  // Check if has empty latest sellers
  const hasEmptySellers = useMemo(() => isEmptyArray(sellers), [sellers])

  return {
    sellers: sellers,
    isError: queryData.isError,
    isLoading: queryData.isLoading,
    hasEmptySellers: hasEmptySellers
  }
}

// Hooks
import { useGetLatestProductsQuery } from '@modules/Home/api/get-latest-products/graphql'

// Constants
import { LIMIT_LATEST_PRODUCTS } from './constants'

/**
 * Hook for implements the logic of the Products component
 */
export default function useProducts() {
  const queryData = useGetLatestProductsQuery({ populate: true, limit: LIMIT_LATEST_PRODUCTS })

  return {
    isError: queryData.isError,
    isLoading: queryData.isLoading,
    products: queryData?.data?.latestProducts ?? []
  }
}

// Hooks
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'
import { useParams } from 'next/navigation'
import {
  useLazyGetProductQuery,
  useLazyGetProductWithSessionQuery
} from '@modules/Product/api/graphql'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the ProductWrapper component
 */
export default function useProductWrapper() {
  const params = useParams()
  const { isAuthenticated } = useAuth()

  const useGetProduct = isAuthenticated ? useLazyGetProductWithSessionQuery : useLazyGetProductQuery

  const [getProduct, result] = useGetProduct()

  useMounted(() => {
    const code = params?.code

    if (isString(code) && !isEmptyString(code)) {
      getProduct({ code: params?.code as string })
    }
  }, [params?.code])

  return { ...result, isAuthenticated: isAuthenticated }
}

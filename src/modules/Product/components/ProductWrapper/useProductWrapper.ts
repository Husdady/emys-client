// Hooks
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'
import { useParams } from 'next/navigation'
import { useVisitProductMutation } from '@modules/Product/api'
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
  const [visitProduct] = useVisitProductMutation()

  const useGetProduct = isAuthenticated ? useLazyGetProductWithSessionQuery : useLazyGetProductQuery

  const [getProduct, result] = useGetProduct()

  useMounted(() => {
    const code = params?.code

    // Get product by code
    if (isString(code) && !isEmptyString(code)) {
      getProduct({ code: params?.code as string })
    }
  }, [params?.code])

  useMounted(() => {
    if (result.isSuccess) {
      const data = result.data as any // Get data
      const product = isAuthenticated ? data.productWithSession : data.product // Get product
      const productId = product.id as string // Get product id

      // Validates 'productId'
      if (isString(productId) && !isEmptyString(productId)) {
        visitProduct({ productId: productId })
      }
    }
  }, [isAuthenticated, result.isSuccess])

  return { ...result, isAuthenticated: isAuthenticated }
}

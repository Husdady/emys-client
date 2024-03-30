// Hooks
import { useMemo } from 'react'
import useAuth from '@modules/Auth/states/auth/useAuth'
import useMounted from '@hooks/useMounted'
import { useParams } from 'next/navigation'
import { useVisitProductMutation } from '@modules/Product/api'
import {
  useLazyGetProductQuery,
  useLazyGetProductWithSessionQuery
} from '@modules/Product/api/graphql'

// Interfaces
import { ProductData } from './interfaces'
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the ProductContainer component
 */
export default function useProductContainer() {
  const params = useParams()
  const { isAuthenticated } = useAuth()
  const [visitProduct] = useVisitProductMutation()

  const useGetProduct = isAuthenticated ? useLazyGetProductWithSessionQuery : useLazyGetProductQuery

  const [getProduct, queryData] = useGetProduct()
  const data = queryData.data as ProductData // Get data of the Product

  // Get the related products
  const relatedProducts = useMemo(() => {
    return (data?.product?.relatedProducts ??
      data?.productWithSession?.relatedProducts ??
      []) as Product[]
  }, [data])

  // Check if the query has an invalid data
  const hasInvalidData = useMemo(() => {
    return (
      queryData.isError ||
      (!isAuthenticated && !data?.product) ||
      (isAuthenticated && !data?.productWithSession)
    )
  }, [data, isAuthenticated, queryData.isError])

  useMounted(() => {
    const code = params?.code

    // Get product by code
    if (isString(code) && !isEmptyString(code)) {
      getProduct({ code: code as string })
    }
  }, [params?.code])

  useMounted(() => {
    if (queryData.isSuccess) {
      const data = queryData.data as any // Get data
      const product = isAuthenticated ? data.productWithSession : data.product // Get product
      const productId = product.id as string // Get product id

      // Validates 'productId'
      if (isString(productId) && !isEmptyString(productId)) {
        visitProduct({ productId: productId })
      }
    }
  }, [isAuthenticated, queryData.isSuccess])

  return {
    ...queryData,
    data: data,
    hasInvalidData: hasInvalidData,
    relatedProducts: relatedProducts
  }
}

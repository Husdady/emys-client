// Components
import Error from './Error'
import Loading from './Loading'
import ProductItem from '@modules/Product/components/ProductItem'

// Hooks
import useProductWrapper from './useProductWrapper'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function ProductWrapper() {
  const { data, isError, isLoading, isAuthenticated } = useProductWrapper()

  const graphqlData = data as any

  if (isError) return <Error />
  if (isLoading) return <Loading />
  if (!isAuthenticated && !graphqlData?.product) return null
  if (isAuthenticated && !graphqlData?.productWithSession) return null

  return (
    <ProductItem
      product={(graphqlData.product ?? graphqlData.productWithSession) as Product}
    />
  )
}

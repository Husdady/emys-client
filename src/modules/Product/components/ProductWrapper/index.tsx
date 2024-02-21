// Components
import Error from './Error'
import Loading from './Loading'
import ProductItem from '@modules/Product/components/ProductItem'

// Hooks
import useProductWrapper from './useProductWrapper'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function ProductWrapper() {
  const { data, isError, isLoading } = useProductWrapper()

  if (isError) return <Error />
  if (isLoading) return <Loading />
  if (!data?.product) return null

  return <ProductItem product={data.product as Product} />
}

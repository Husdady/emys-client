// Components
import Error from './Error'
import Loading from './Loading'
import ProductItem from '@modules/Product/components/ProductItem'
import RelatedProducts from '@modules/Product/components/RelatedProducts'

// Hooks
import useProductContainer from './useProductContainer'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function ProductContainer() {
  const { data, isLoading, hasInvalidData, relatedProducts } = useProductContainer()

  if (isLoading) return <Loading />
  if (!isLoading && hasInvalidData) return <Error />

  return (
    <section className="product-container">
      <ProductItem product={(data.product ?? data.productWithSession) as Product} />
      <RelatedProducts products={relatedProducts} />
    </section>
  )
}

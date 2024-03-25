// Components
import ProductItems from '@modules/Product/components/ProductItems'

// Interfaces
import { ProductsProps } from './interfaces'

export default function Products({ products, hasScrollbar, productItemsRef }: ProductsProps) {
  return (
    <section className="products">
      <ProductItems
        products={products}
        hasScrollbar={hasScrollbar}
        productItemsRef={productItemsRef}
      />
    </section>
  )
}

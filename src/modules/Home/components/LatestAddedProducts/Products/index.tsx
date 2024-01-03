// Components
import Results from './Results'
import Placeholder from './Results/Placeholder'

// Interfaces
import { ProductsProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

export default function Products({
  products,
  isLoading,
  hasScrollbar,
  productItemsRef
}: ProductsProps) {
  return (
    <section id="products" className="mt-[1.5rem] mx-auto max-w-[1200px]">
      {isLoading && <Placeholder />}

      {!isLoading && Array.isArray(products) && !isEmptyArray(products) && (
        <Results
          products={products}
          hasScrollbar={hasScrollbar}
          productItemsRef={productItemsRef}
        />
      )}
    </section>
  )
}

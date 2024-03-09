// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useRelatedProducts from './useRelatedProducts'

// Interfaces
import { RelatedProductsProps } from './interfaces'

// Constants
import { RELATED_PRODUCTS_ID } from './constants'

// Dynamic Components
const Products = dynamic(() => import('./Products'))
const ProductsHeader = dynamic(() => import('@modules/Product/components/ProductsHeader'))

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const {
    hasScrollbar,
    productItemsRef,
    hasEmptyProducts,
    showNextProducts,
    showPreviousProducts,
    isDisabledNextArrow,
    isDisabledPreviousArrow
  } = useRelatedProducts({ products: products })

  if (hasEmptyProducts) return null

  return (
    <section
      id={RELATED_PRODUCTS_ID}
      className="related-products mt-4 p-4 pb-0 xl:px-0 xl:ml-[2.85rem] xl:mr-[3.63rem]"
    >
      <ProductsHeader
        title="Productos Relacionados:"
        className="related-products-header"
        isDisabledPreviousArrow={isDisabledPreviousArrow}
        isDisabledNextArrow={isDisabledNextArrow}
        onPrevious={showPreviousProducts}
        onNext={showNextProducts}
      />

      <Products products={products} hasScrollbar={hasScrollbar} productItemsRef={productItemsRef} />
    </section>
  )
}

// Components
import ProductItems from '@modules/Product/components/ProductItems'
import ProductsHeader from '@modules/Product/components/ProductsHeader'

// Hooks
import useRelatedProducts from './useRelatedProducts'

// Interfaces
import { RelatedProductsProps } from './interfaces'

// Constants
import { RELATED_PRODUCTS_ID } from './constants'

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

      <ProductItems
        products={products}
        hasScrollbar={hasScrollbar}
        productItemsRef={productItemsRef}
      />
    </section>
  )
}

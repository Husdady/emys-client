// Components
import Loading from './Loading'
import ProductItems from '@modules/Product/components/ProductItems'
import ProductsHeader from '@modules/Product/components/ProductsHeader'

// Hooks
import usePopularProducts from './usePopularProducts'

// Constants
import { POPULAR_PRODUCTS_ID } from './constants'

export default function PopularProducts() {
  const {
    products,
    isLoading,
    hasScrollbar,
    productItemsRef,
    hasEmptyProducts,
    showNextProducts,
    showPreviousProducts,
    isDisabledNextArrow,
    isDisabledPreviousArrow
  } = usePopularProducts()

  if (isLoading) return <Loading />
  if (hasEmptyProducts) return null

  return (
    <section
      id={POPULAR_PRODUCTS_ID}
      className="popular-products pt-2 px-4 xl:px-0 xl:ml-[2.85rem] xl:mr-[3.63rem]"
    >
      <ProductsHeader
        title="También podría interesarte:"
        className="popular-products-header"
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

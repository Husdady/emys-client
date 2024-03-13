// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestAddedProducts from './useLatestAddedProducts'

// Constants
import { LATEST_ADDED_PRODUCTS_ID } from './constants'

// Dynamic Components
const Error = dynamic(() => import('./Error'))
const Empty = dynamic(() => import('./Empty'))
const Header = dynamic(() => import('./Header'))
const Products = dynamic(() => import('./Products'))

export default function LatestAddedProducts() {
  const {
    isError,
    products,
    isLoading,
    hasScrollbar,
    productItemsRef,
    hasEmptyProducts,
    showNextProducts,
    showPreviousProducts,
    isDisabledNextArrow,
    isDisabledPreviousArrow
  } = useLatestAddedProducts()

  // Show Error view
  if (isError) return <Error />

  // Show Empty view
  if (!isLoading && hasEmptyProducts) {
    return <Empty />
  }

  return (
    <section
      id={LATEST_ADDED_PRODUCTS_ID}
      className="latest-added-products px-4 xl:px-0 pb-6 sm:pb-8"
    >
      <Header
        showNextProducts={showNextProducts}
        showPreviousProducts={showPreviousProducts}
        isDisabledPreviousArrow={isDisabledPreviousArrow}
        isDisabledNextArrow={isDisabledNextArrow}
      />

      <Products
        products={products}
        isLoading={isLoading}
        hasScrollbar={hasScrollbar}
        productItemsRef={productItemsRef}
      />
    </section>
  )
}

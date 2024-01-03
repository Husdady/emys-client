// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestAddedProducts from './useLatestAddedProducts'

// Constants
import { LATEST_ADDED_PRODUCTS_ID } from './constants'

// Dynamic Components
const Error = dynamic(() => import('./Error'))
const Header = dynamic(() => import('./Header'))
const Products = dynamic(() => import('./Products'))
const EmptyLatestProducts = dynamic(() => import('./EmptyLatestProducts'))

export default function LatestAddedProducts() {
  const {
    isError,
    isLoading,
    hasScrollbar,
    products,
    productItemsRef,
    hasEmptyProducts,
    showNextProducts,
    showPreviousProducts,
    isDisabledNextArrow,
    isDisabledPreviousArrow
  } = useLatestAddedProducts()

  return (
    <section
      id={LATEST_ADDED_PRODUCTS_ID}
      className="latest-added-products mx-auto pt-4 pb-[3.5rem] px-4 xl:px-0"
    >
      <Header
        showNextProducts={showNextProducts}
        showPreviousProducts={showPreviousProducts}
        isDisabledNextArrow={isDisabledNextArrow}
        isDisabledPreviousArrow={isDisabledPreviousArrow}
      />

      <EmptyLatestProducts />
    </section>
  )
}

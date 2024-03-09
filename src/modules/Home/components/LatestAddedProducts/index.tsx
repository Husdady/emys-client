// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestAddedProducts from './useLatestAddedProducts'

// Utils
import classnames from '@utils/classnames'

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

  return (
    <section
      id={LATEST_ADDED_PRODUCTS_ID}
      className={classnames([
        isError ? 'sm:!pb-[2rem]' : null,
        !isError && hasEmptyProducts ? 'pb-4 lg:pb-[3rem]' : 'pb-[0.65rem] sm:pb-4 xl:pb-6',
        'latest-added-products pt-4 px-4 xl:px-0'
      ])}
    >
      <Header
        showNextProducts={showNextProducts}
        showPreviousProducts={showPreviousProducts}
        isDisabledPreviousArrow={isDisabledPreviousArrow}
        isDisabledNextArrow={isDisabledNextArrow}
      />

      {isError && <Error />}
      {!isError && !isLoading && hasEmptyProducts && <Empty />}

      {(isLoading || (!isError && !hasEmptyProducts)) && (
        <Products
          products={products}
          isLoading={isLoading}
          hasScrollbar={hasScrollbar}
          productItemsRef={productItemsRef}
        />
      )}
    </section>
  )
}

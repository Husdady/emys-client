// Librarys
import { Suspense } from 'react'

// Components
import InputSearchPlaceholder from './InputSearch/Placeholder'
import ProductPlaceholder from '@modules/Products/components/Product/Placeholder'
import {
  ShadowLeft,
  ShadowRight
} from '@modules/Home/components/LatestAddedProducts/Shadows'

// Hooks
import useResults from './useResults'

// Interfaces
import { ProductsProps } from '@modules/Home/components/LatestAddedProducts/Products/interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Constants
import { PRODUCT_ITEMS_ID } from './constants'

// Lazy Components
const InputSearch = lazy(() => import('./InputSearch'))
const Product = lazy(() => import('@modules/Products/components/Product'))

export default function Results({
  products,
  hasScrollbar,
  productItemsRef
}: Omit<ProductsProps, 'isLoading'>) {
  const {
    results,
    setResults,
    handleScroll,
    isMobileScreen,
    handleMouseMove,
    handleMouseDown,
    isShowingLeftShadow,
    isShowingRightShadow
  } = useResults({
    products: products,
    hasScrollbar: hasScrollbar,
    productItemsRef: productItemsRef
  })

  return (
    <>
      <Suspense fallback={<InputSearchPlaceholder />}>
        <InputSearch products={products} setResults={setResults} />
      </Suspense>

      <div className="relative product-items-container rounded-xl">
        {hasScrollbar && isShowingLeftShadow && <ShadowLeft />}
        {hasScrollbar && isShowingRightShadow && <ShadowRight />}

        <ul
          ref={productItemsRef}
          id={PRODUCT_ITEMS_ID}
          onScroll={handleScroll}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          className={classnames([
            'product-items rounded-xl',
            isMobileScreen ? 'overflow-x-hidden' : 'overflow-x-auto'
          ])}
        >
          {results.map((product) => (
            <li key={product.id} className="product-item">
              <Suspense fallback={<ProductPlaceholder />}>
                <Product {...product} />
              </Suspense>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

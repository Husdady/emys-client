// Librarys
import { Suspense } from 'react'

// Components
import ShadowLeft from './ShadowLeft'
import ShadowRight from './ShadowRight'
import InputSearchPlaceholder from './InputSearch/Placeholder'
import ProductPlaceholder from '@modules/Products/components/Product/Placeholder'

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
    handleMouseMove,
    handleMouseDown,
    isShowingLeftShadow,
    isShowingRightShadow,
    isBiggestTabletScreen
  } = useResults({
    products: products,
    productItemsRef: productItemsRef
  })

  return (
    <>
      <Suspense fallback={<InputSearchPlaceholder />}>
        <InputSearch products={products} setResults={setResults} />
      </Suspense>

      <div className="relative product-items-container">
        {hasScrollbar && isShowingLeftShadow && <ShadowLeft />}
        {hasScrollbar && isShowingRightShadow && <ShadowRight />}

        <ul
          ref={productItemsRef}
          id={PRODUCT_ITEMS_ID}
          onScroll={handleScroll}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          className={classnames([
            'product-items mt-[2.5rem] flex gap-y-2.5 sm:gap-y-3.5 gap-x-2 pb-[1.1rem] relative flex-wrap sm:flex-nowrap sm:gap-x-3.5',
            isBiggestTabletScreen ? 'overflow-x-auto' : 'overflow-x-hidden'
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

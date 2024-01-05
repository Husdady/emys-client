// Librarys
import { Suspense } from 'react'

// Components
import ShadowLeft from './ShadowLeft'
import ShadowRight from './ShadowRight'
import PlaceholderItem from './Placeholder/Item'
import Placeholder from './InputSearch/Placeholder'

// Hooks
import useResults from './useResults'

// Interfaces
import { ProductsProps } from '@modules/Home/components/LatestAddedProducts/Products/interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Constants
import { PRODUCT_ITEMS_ID } from './constants'

// Dynamic Components
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
      <Suspense fallback={<Placeholder />}>
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
            'product-items mt-[2.5rem] flex gap-y-3 gap-x-2.5 pb-[1.1rem] relative flex-wrap sm:flex-nowrap sm:gap-x-4',
            isBiggestTabletScreen ? 'overflow-x-auto' : 'overflow-x-hidden'
          ])}
        >
          {results.map((product) => (
            <li key={product.id} className="product-item">
              <Suspense fallback={<PlaceholderItem />}>
                <Product {...product} />
              </Suspense>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

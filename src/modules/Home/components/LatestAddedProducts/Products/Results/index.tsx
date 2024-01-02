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
import { ResultsProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Constants
import { PRODUCT_ITEMS_ID } from './constants'
import classnames from '@root/src/utils/classnames'

// Dynamic Components
const InputSearch = lazy(() => import('./InputSearch'))
const Product = lazy(() => import('@modules/Products/components/Product'))

export default function Results({ products }: ResultsProps) {
  const {
    results,
    setResults,
    productItemsRef,
    handleMouseMove,
    handleMouseDown,
    isShowingShadowLeft,
    isShowingShadowRight,
    isBiggestTabletScreen
  } = useResults({
    products: products
  })

  return (
    <>
      <Suspense fallback={<Placeholder />}>
        <InputSearch products={products} setResults={setResults} />
      </Suspense>

      <div className="relative product-items-container">
        {isShowingShadowLeft && <ShadowLeft />}
        {isShowingShadowRight && <ShadowRight />}

        <ul
          ref={productItemsRef}
          id={PRODUCT_ITEMS_ID}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          className={classnames([
            'product-items mt-[2.5rem] flex gap-x-4 pb-[1.1rem] relative',
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

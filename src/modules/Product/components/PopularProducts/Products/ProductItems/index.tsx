// Librarys
import { Suspense } from 'react'

// Components
import ProductPlaceholder from '@modules/Products/components/Product/Placeholder'

// Hooks
import useDrag from '@modules/Product/hooks/useDrag'

// Interfaces
import { ProductsProps } from '@modules/Home/components/LatestAddedProducts/Products/interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Constants
import { PRODUCT_ITEMS_ID } from './constants'

// Lazy Components
const Product = lazy(() => import('@modules/Products/components/Product'))

export default function ProductItems({
  products,
  hasScrollbar,
  productItemsRef
}: Omit<ProductsProps, 'isLoading'>) {
  const { handleScroll, handleMouseMove, handleMouseDown, isMobileScreen } = useDrag({
    hasScrollbar: hasScrollbar,
    productItemsRef: productItemsRef
  })

  return (
    <div className="relative product-items-container">
      <ul
        ref={productItemsRef}
        id={PRODUCT_ITEMS_ID}
        onScroll={handleScroll}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        className={classnames([
          'product-items !mt-4 rounded-xl',
          isMobileScreen ? 'overflow-x-hidden' : 'overflow-x-auto'
        ])}
      >
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Suspense fallback={<ProductPlaceholder />}>
              <Product {...product} />
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  )
}

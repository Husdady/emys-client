// Librarys
import { Suspense } from 'react'

// Components
import ProductPlaceholder from '@modules/Products/components/Product/Placeholder'

// Hooks
import useDrag from '@modules/Product/hooks/useDrag'

// Interfaces
import { ProductItemsProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Product = lazy(() => import('@modules/Products/components/Product'))

export default function ProductItems({
  products,
  hasScrollbar,
  productItemsRef
}: ProductItemsProps) {
  const { handleScroll, handleMouseMove, handleMouseDown, isMobileScreen } = useDrag({
    hasScrollbar: hasScrollbar,
    productItemsRef: productItemsRef
  })
  console.log({ productItemsRef: productItemsRef.current })
  return (
    <div className="relative product-items-container">
      <ul
        ref={productItemsRef}
        onScroll={handleScroll}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        className={classnames([
          'product-items sm:!mt-4 rounded-xl',
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

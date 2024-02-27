// Librarys
import { Suspense } from 'react'

// Components
import ProductImagesFallback from './ProductImages/Fallback'
import ProductInformationFallback from './ProductInformation/Fallback'

// Hooks
import useProductItem from './useProductItem'

// Interfaces
import { ProductItemProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const ProductImages = lazy(() => import('./ProductImages'))
const ProductInformation = lazy(() => import('./ProductInformation'))

export default function ProductItem({ product }: ProductItemProps) {
  // useProductItem()

  return (
    <section className="product-item flex flex-wrap xl:flex-nowrap mx-2 sm:mx-3 md:mx-6 xl:mx-[3.63rem] gap-x-1.5 gap-y-3 items-start">
      <Suspense fallback={<ProductImagesFallback />}>
        <ProductImages {...product} />
      </Suspense>

      <Suspense fallback={<ProductInformationFallback />}>
        <ProductInformation {...product} />
      </Suspense>
    </section>
  )
}

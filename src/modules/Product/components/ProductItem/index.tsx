// Librarys
import { Suspense } from 'react'

// Components
import ProductImagesFallback from './ProductImages/Fallback'
import ProductInformationFallback from './ProductInformation/Fallback'

// Interfaces
import { ProductItemProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const ProductImages = lazy(() => import('./ProductImages'))
const ProductInformation = lazy(() => import('./ProductInformation'))

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <section className="product-item flex flex-wrap md:flex-nowrap mx-4 md:mx-6 xl:mx-[3.63rem] gap-x-4 gap-y-4.5">
      <Suspense fallback={<ProductImagesFallback />}>
        <ProductImages />
      </Suspense>

      <Suspense fallback={<ProductInformationFallback />}>
        <ProductInformation {...product} />
      </Suspense>
    </section>
  )
}

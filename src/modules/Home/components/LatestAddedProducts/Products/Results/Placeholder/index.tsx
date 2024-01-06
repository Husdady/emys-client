// Components
import ProductPlaceholder from '@modules/Products/components/Product/Placeholder'
import InputSearchPlaceholder from '@modules/Home/components/LatestAddedProducts/Products/Results/InputSearch/Placeholder'

// Constants
import { MINIMUN_PLACEHOLDER_PRODUCTS } from './constants'

export default function Placeholder() {
  return (
    <>
      <InputSearchPlaceholder />

      <ul className="mt-[2.5rem] product-items flex flex-wrap sm:flex-nowrap items-start overflow-x-auto px-3 pb-4 gap-y-3.5 gap-x-3 sm:gap-x-3.5">
        {MINIMUN_PLACEHOLDER_PRODUCTS.map((i) => (
          <li key={String(i)} className="product-item">
            <ProductPlaceholder />
          </li>
        ))}
      </ul>
    </>
  )
}

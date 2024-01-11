// Components
import ProductPlaceholder from '@modules/Products/components/Product/Placeholder'
import InputSearchPlaceholder from '@modules/Home/components/LatestAddedProducts/Products/Results/InputSearch/Placeholder'

// Utils
import createList from '@utils/createList'

// Constants
import {
  LIMIT_LATEST_PRODUCTS,
  LIMIT_LATEST_PRODUCTS_FOR_MOBILE
} from '@modules/Home/components/LatestAddedProducts/constants'

export default function Placeholder() {
  return (
    <>
      <InputSearchPlaceholder />

      <ul className="mt-[2.5rem] product-items flex flex-wrap sm:flex-nowrap items-start overflow-x-auto px-3 pb-4 gap-y-3.5 gap-x-3 sm:gap-x-3.5">
        {createList(
          window.innerWidth <= 640 ? LIMIT_LATEST_PRODUCTS_FOR_MOBILE : LIMIT_LATEST_PRODUCTS
        ).map((i) => (
          <li key={String(i)} className="product-item">
            <ProductPlaceholder />
          </li>
        ))}
      </ul>
    </>
  )
}

// Components
import ProductPlaceholder from '@modules/Products/components/Product/Placeholder'

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

// Utils
import createList from '@utils/createList'
import classnames from '@utils/classnames'

// Constants
import {
  LIMIT_LATEST_PRODUCTS,
  LIMIT_LATEST_PRODUCTS_FOR_MOBILE
} from '@modules/Home/components/LatestAddedProducts/constants'

export default function ProductsPlaceholder({ className }: OnlyClassNameProp) {
  return (
    <ul
      className={classnames([
        className,
        'product-items flex flex-wrap sm:flex-nowrap items-start overflow-x-auto gap-y-3.5 no-scrollbar gap-x-2'
      ])}
    >
      {createList(
        window.innerWidth <= 640 ? LIMIT_LATEST_PRODUCTS_FOR_MOBILE : LIMIT_LATEST_PRODUCTS
      ).map((i) => (
        <li key={String(i)} className="product-item">
          <ProductPlaceholder />
        </li>
      ))}
    </ul>
  )
}

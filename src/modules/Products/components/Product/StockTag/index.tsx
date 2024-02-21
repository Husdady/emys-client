// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { tagProps } from './constants'
import { AVAILABLE, UNAVAILABLE } from '@modules/Sellers/components/Seller/constants'

export default function StockTag({ isInStock }: Pick<Product, 'isInStock'>) {
  const props = tagProps[isInStock ? AVAILABLE : UNAVAILABLE]

  return (
    <span
      className={classnames([
        props.className,
        'stock-tag font-semibold px-2 py-[0.15rem] flex items-center dark:text-white rounded'
      ])}
    >
      {props.title}
    </span>
  )
}

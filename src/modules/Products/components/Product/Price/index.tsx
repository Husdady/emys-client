// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Constants
import currencyTypes from './currency-types'

export default function Price({ price, currencyType }: Pick<Product, 'price' | 'currencyType'>) {
  return (
    <span className="product-price text-lg font-poppins font-semibold block text-right mt-4 truncate dark:text-gray-200">
      {currencyTypes[currencyType]} {price.toFixed(2)}
    </span>
  )
}

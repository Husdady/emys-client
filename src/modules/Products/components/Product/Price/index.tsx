// Librarys
import { memo } from 'react'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Constants
import currencyTypes from './currency-types'

function Price({ price, currencyType }: Pick<Product, 'price' | 'currencyType'>) {
  return (
    <span className="product-price text-xl sm:text-lg font-poppins font-semibold block text-right mt-2 truncate dark:text-gray-200">
      {currencyTypes[currencyType]} {price.toFixed(2)}
    </span>
  )
}

export default memo(Price, (prevProps, nextProps) => {
  return prevProps.price === nextProps.price && prevProps.currencyType === nextProps.currencyType
})

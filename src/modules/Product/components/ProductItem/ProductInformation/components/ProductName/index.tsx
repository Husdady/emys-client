// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

// Constants
import { weightTypes } from './constants'

export default function ProductName(product: ProductByCode) {
  return (
    <h3 className="product-name text-[1.65rem] leading-tight break-word font-semibold text-gray-700 dark:text-white">
      {product.name}, {product.weight} {weightTypes[product.weightType]} - {product.totalUnits}{' '}
      {(product.totalUnits as number) <= 1 ? 'unidad disponible' : 'unidades disponibles'}
    </h3>
  )
}

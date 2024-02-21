// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Constants
import { weightTypes } from './constants'

export default function ProductName(product: Product) {
  return (
    <h3 className="product-name text-[1.65rem] leading-tight break-word font-semibold text-gray-700">
      {product.name}, {product.weight} {weightTypes[product.weightType]} - {product.totalUnits}{' '}
      {(product.totalUnits as number) <= 1 ? 'unidad disponible' : 'unidades disponibles'}
    </h3>
  )
}
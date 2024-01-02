// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function Sku({ sku }: Pick<Product, 'sku'>) {
  return (
    <div className="flex flex-col truncate leading-4">
      <span className="font-semibold text-amber-600 dark:text-amber-400">SKU</span>
      <span className="font-semibold text-gray-600 dark:text-gray-300 block truncate">{sku}</span>
    </div>
  )
}

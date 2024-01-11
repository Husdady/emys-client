// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function StockTag({ isInStock }: Pick<Product, 'isInStock'>) {
  if (isInStock) {
    return (
      <span className="available-product font-semibold text-sky-500 bg-sky-100 rounded px-2 py-[0.15rem] flex items-center dark:bg-sky-500 dark:text-white">
        Disponible
      </span>
    )
  }

  return (
    <span className="not-available-product font-semibold text-red-500 bg-red-100 rounded px-2 py-[0.15rem] flex items-center dark:bg-red-600 dark:text-white">
      Agotado
    </span>
  )
}

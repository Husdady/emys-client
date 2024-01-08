// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import truncate from '@utils/truncate'

export default function Description({ description }: Pick<Product, 'description'>) {
  return (
    <span className="product-description block text-gray-500 leading-tight mt-2.5 text-[0.96rem] break-word dark:text-gray-300 font-lexend min-h-[52px] text-justify">
      {truncate(description, 90 + (window.innerWidth <= 375 ? 15 : 0))}
    </span>
  )
}

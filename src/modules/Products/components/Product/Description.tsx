// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import truncate from '@utils/truncate'

export default function Description({ description }: Pick<Product, 'description'>) {
  return (
    <span className="product-description block text-gray-500 leading-[1.1rem] mt-1 text-[0.96rem] max-w-[210px] break-word dark:text-gray-300 font-lexend min-h-[52px]">
      {truncate(description, 60)}
    </span>
  )
}

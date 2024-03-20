// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import truncate from '@utils/truncate'

export default function Description({ description }: Pick<Product, 'description'>) {
  return (
    <span className="product-description block text-gray-500 leading-tight mt-1 md:mt-1.5 xl:mt-2 text-[0.96rem] break-word dark:text-gray-300 font-lexend min-h-[52px]">
      {truncate(
        description,
        83 + (window.innerWidth <= 375 ? 15 : window.innerWidth <= 640 ? 20 : 0)
      )}
    </span>
  )
}

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import truncate from '@utils/truncate'

export default function Description({ description }: Pick<Product, 'description'>) {
  return (
    <span className="product-description block text-gray-500 leading-tight mt-2.5 text-[0.96rem] break-word dark:text-gray-300 font-lexend min-h-[52px] text-center">
      {truncate(
        description,
        window.innerWidth <= 375
          ? 98
          : window.innerWidth <= 640
          ? 103
          : window.innerWidth <= 1366
          ? 77
          : window.innerWidth <= 1920
          ? 100
          : 0
      )}
      {/* 83 + (window.innerWidth <= 375 ? 15 : window.innerWidth <= 640 ? 20 : 0) */}
    </span>
  )
}

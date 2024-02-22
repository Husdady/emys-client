// Components
import Images from './Images'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function ProductImages(product: Product) {
  console.log({ product })

  return (
    <aside className="product-images bg-white pt-3.5 pb-4 px-4 font-poppins rounded shadow-lg min-h-[500px] dark:shadow-none dark:bg-gray-900">
      <Images images={product.images} />
    </aside>
  )
}

// Components
import Images from './Images'
import ImageCarousel from './ImageCarousel'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function ProductImages(product: Product) {
  return (
    <aside className="product-images bg-white pt-3.5 pb-4 px-4 font-poppins rounded shadow-lg min-h-[500px] dark:shadow-none dark:bg-gray-900">
      <ImageCarousel images={product.images} coverImage={product.coverImage} />
      <Images images={product.images} coverImage={product.coverImage} />
    </aside>
  )
}

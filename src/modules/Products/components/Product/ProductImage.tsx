// Librarys
import Image from 'next/image'

// Components
import Photo from '@components/Icons/Photo'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'
import { Image as ImageModel } from '@libs/axios/interfaces'

// Utils
import isObject from '@utils/isObject'

export interface ProductImageProps extends Pick<Product, 'coverImage'> {
  firstImage?: ImageModel | null
}

export default function ProductImage({ coverImage, firstImage }: ProductImageProps) {
  if (isObject(coverImage) || isObject(firstImage)) {
    return (
      <Image
        width={coverImage?.width ?? firstImage?.width}
        height={coverImage?.height ?? firstImage?.height}
        src={(coverImage?.url ?? firstImage?.url) as string}
        alt={(coverImage?.filename ?? firstImage?.filename) as string}
        className="product-image min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] mb-3 mx-auto bg-gray-100 dark:bg-gray-700 p-3 rounded-md"
      />
    )
  }

  return (
    <div className="mb-3 w-[120px] min-w-[120px] max-w-[120px] h-[150px] min-h-[150px] max-h-[150px] bg-gray-100 flex items-center justify-center rounded-md mx-auto dark:bg-gray-700 dark:text-gray-400">
      <Photo size="xxxl" />
    </div>
  )
}

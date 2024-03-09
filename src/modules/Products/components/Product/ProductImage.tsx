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
        className="product-image min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] mb-2 mx-auto"
      />
    )
  }

  return (
    <div className="mb-2 w-[90px] min-w-[90px] max-w-[90px] h-[120px] min-h-[120px] max-h-[120px] bg-gray-100 flex items-center justify-center rounded mx-auto dark:bg-gray-700 dark:text-gray-400">
      <Photo size="xxl" />
    </div>
  )
}

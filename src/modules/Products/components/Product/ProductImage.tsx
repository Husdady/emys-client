// Librarys
import Image from 'next/image'

// Components
import Photo from '@assets/icons/photo'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import isObject from '@utils/isObject'

export default function ProductImage({ coverImage }: Pick<Product, 'coverImage'>) {
  if (isObject(coverImage)) {
    return (
      <Image
        objectFit="cover"
        width={coverImage?.width}
        height={coverImage?.height}
        src={coverImage?.url as string}
        alt={coverImage?.filename as string}
        className="product-image min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] mb-2 mx-auto"
      />
    )
  }

  return (
    <div className="mb-2 w-[90px] min-w-[90px] max-w-[90px] h-[120px] min-h-[120px] max-h-[120px] bg-gray-100 flex items-center justify-center rounded mx-auto dark:bg-gray-800 dark:text-gray-500">
      <Photo size="xxl" />
    </div>
  )
}

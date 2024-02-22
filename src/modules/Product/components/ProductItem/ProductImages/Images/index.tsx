// Librarys
import { Image } from 'antd/lib'

// Hooks
import useImages from './useImages'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function Images({ images }: Pick<Product, 'images'>) {
  useImages()

  return (
    <ul className="image-list flex items-center overflow-hidden gap-x-2">
      {images?.map((image) => (
        <li
          key={image.id}
          className="image-item w-[110px] h-[110px] bg-gray-100 p-2 relative rounded-md dark:bg-gray-700"
        >
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            className="!w-full !h-full"
            title="Visualizar imagen"
          />
        </li>
      ))}
    </ul>
  )
}

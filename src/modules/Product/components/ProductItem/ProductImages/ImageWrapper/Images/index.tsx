// Librarys
import { Image } from 'antd/lib'

// Hooks
import useImages from './useImages'

// Interfaces
import { ImagesProps } from './interfaces'
import classnames from '@root/src/utils/classnames'

export default function Images({ images, activeImageId, handleActiveImage }: ImagesProps) {
  useImages()

  return (
    <ul className="image-list flex flex-wrap items-center overflow-hidden gap-2">
      {images?.map((image, i) => (
        <li
          key={image.id}
          className={classnames([
            image.id === activeImageId ? 'active' : null,
            'image-item w-[110px] h-[110px] min-w-[110px] min-h-[110px] bg-gray-100 p-2 relative rounded-md dark:bg-gray-700'
          ])}
        >
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            title="Visualizar imagen"
            className="!w-full !h-full"
            onClick={handleActiveImage(image, i)}
          />
        </li>
      ))}
    </ul>
  )
}

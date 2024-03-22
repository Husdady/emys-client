// Librarys
import Image from 'next/image'

// Interfaces
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

// Utils
import classnames from '@utils/classnames'

type ImagesProps = Omit<SharedProps, 'carouselRef'>

export default function Images({ images, activeImageId, handleActiveImage }: ImagesProps) {
  return (
    <ul className="image-list flex flex-wrap xl:flex-nowrap items-center xl:overflow-x-auto gap-2 pb-2">
      {images.map((image, i) => (
        <li
          key={image.id}
          role={image.id === activeImageId ? 'listitem' : 'button'}
          className={classnames([
            image.id === activeImageId ? 'active' : null,
            'image-item w-[110px] h-[110px] min-w-[110px] min-h-[110px] bg-gray-100 p-2 relative rounded-md dark:bg-gray-700'
          ])}
        >
          <Image
            src={image.url}
            width={image.width}
            alt={image.filename}
            height={image.height}
            title="Visualizar imagen"
            className="!w-full !h-full object-contain"
            onClick={handleActiveImage(image, i)}
          />
        </li>
      ))}
    </ul>
  )
}

// Librarys
import { Image } from 'antd/lib'

// Hooks
import useImages from './useImages'

// Interfaces
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function Images({
  images,
  carouselRef,
  activeImageId,
  handleActiveImage
}: SharedProps) {
  const { handleClickImage } = useImages({
    carouselRef: carouselRef,
    handleActiveImage: handleActiveImage
  })

  return (
    <ul className="image-list flex flex-nowrap items-center xl:overflow-x-auto gap-2 pb-2">
      {images.map((image, i) => (
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
            alt={image.filename}
            height={image.height}
            title="Visualizar imagen"
            className="!w-full !h-full"
            onClick={handleClickImage(image, i)}
          />
        </li>
      ))}
    </ul>
  )
}

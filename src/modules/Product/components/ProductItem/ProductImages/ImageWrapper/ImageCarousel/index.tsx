// Librarys
import { Carousel } from 'antd/lib'

// Components
import ImageItem from './ImageItem'

// Hooks
import useImageCarousel from './useImageCarousel'

// Interfaces
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { SPEED, CAROUSEL_ID } from './constants'

export default function ImageCarousel({
  images,
  carouselRef,
  activeImageId,
  handleActiveImage
}: SharedProps) {
  const { afterChange, activeImageRef } = useImageCarousel({
    images: images,
    handleActiveImage: handleActiveImage
  })

  return (
    <section
      className={classnames([
        images.length > 1 ? 'h-[32.5rem] max-h-[32.5rem] mb-6' : 'xl:min-h-[40.95rem]',
        'image-carousel-wrapper border-2 border-gray-100 dark:border-gray-700 relative rounded overflow-hidden'
      ])}
    >
      <Carousel
        swipe
        arrows
        dots={false}
        speed={SPEED}
        id={CAROUSEL_ID}
        ref={carouselRef}
        afterChange={afterChange}
        className="image-carousel"
      >
        {images?.map((image) => (
          <ImageItem
            key={image.id}
            {...image}
            carouselRef={carouselRef}
            ref={activeImageId === image.id ? activeImageRef : undefined}
            className={
              images?.length <= 1
                ? 'min-h-[40.95rem] flex items-center justify-center'
                : '!h-[32.5rem] !max-h-[32.5rem]'
            }
          />
        ))}
      </Carousel>
    </section>
  )
}

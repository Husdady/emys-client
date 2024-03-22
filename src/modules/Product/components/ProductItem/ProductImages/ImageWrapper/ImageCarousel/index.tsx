// Librarys
import { Carousel } from 'antd/lib'

// Components
import ImageItem from './ImageItem'

// Hooks
import useImageCarousel from './useImageCarousel'

// Interfaces
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

// Constants
import { SPEED, CAROUSEL_ID, AUTOPLAY_SPEED } from './constants'

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
    <section className="image-carousel-wrapper mb-6 border-2 border-gray-100 dark:border-gray-700 relative rounded h-[32.5rem] max-h-[32.5rem] overflow-hidden">
      <Carousel
        swipe
        arrows
        dots={false}
        speed={SPEED}
        id={CAROUSEL_ID}
        ref={carouselRef}
        afterChange={afterChange}
        autoplaySpeed={AUTOPLAY_SPEED}
        className="image-carousel"
      >
        {images?.map((image) => (
          <ImageItem
            key={image.id}
            {...image}
            carouselRef={carouselRef}
            ref={activeImageId === image.id ? activeImageRef : undefined}
          />
        ))}
      </Carousel>
    </section>
  )
}

// Librarys
import { Carousel } from 'antd/lib'

// Components
import ImageItem from './ImageItem'
import ZoomButton from './ZoomButton'

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
  const { afterChange, pauseOnHover, activeImageRef, handlePauseOnHover, showPreviewActiveImage } =
    useImageCarousel({
      images: images,
      handleActiveImage: handleActiveImage
    })

  return (
    <section className="image-carousel-wrapper mb-3 border-2 border-gray-100 dark:border-gray-700 relative rounded h-[32.5rem] max-h-[32.5rem] leading-[32.5rem] overflow-hidden">
      <ZoomButton onClick={showPreviewActiveImage} />

      <Carousel
        swipe
        arrows
        speed={SPEED}
        id={CAROUSEL_ID}
        ref={carouselRef}
        autoplay={pauseOnHover}
        pauseOnFocus={pauseOnHover}
        pauseOnDotsHover={pauseOnHover}
        afterChange={afterChange}
        pauseOnHover={pauseOnHover}
        autoplaySpeed={AUTOPLAY_SPEED}
        className="image-carousel"
      >
        {images?.map((image) => (
          <ImageItem
            key={image.id}
            {...image}
            carouselRef={carouselRef}
            handlePauseOnHover={handlePauseOnHover}
            ref={activeImageId === image.id ? activeImageRef : undefined}
          />
        ))}
      </Carousel>
    </section>
  )
}

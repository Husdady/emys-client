// Librarys
import { Carousel } from 'antd/lib'

// Components
import ImageItem from './ImageItem'

// Interfaces
import { ImageCarouselProps } from './interfaces'

// Constants
import { SPEED, CAROUSEL_ID, AUTOPLAY_SPEED } from './constants'

export default function ImageCarousel({ images, carouselRef }: ImageCarouselProps) {
  return (
    <Carousel
      swipe
      arrows
      autoplay
      speed={SPEED}
      id={CAROUSEL_ID}
      ref={carouselRef}
      autoplaySpeed={AUTOPLAY_SPEED}
      className="image-carousel mb-3 border-2 border-gray-100 dark:border-gray-700 relative rounded h-[32.5rem] max-h-[32.5rem] leading-[32.5rem] overflow-hidden"
    >
      {images?.map((image) => (
        <ImageItem key={image.id} {...image} />
      ))}
    </Carousel>
  )
}

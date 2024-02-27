// Librarys
import { Carousel, Image } from 'antd/lib'

// Types
import type { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/types'

// Constants
import { AUTOPLAY_SPEED } from './constants'

export default function ImageSlider({ images }: SharedProps) {
  return (
    <Carousel
      autoplay
      autoplaySpeed={AUTOPLAY_SPEED}
      className="image-carousel mb-3 border-2 border-gray-100 dark:border-gray-700 relative rounded"
    >
      {images?.map((image) => (
        <article key={image.id} className="image-item w-full h-[31.9rem]">
          <Image
            width="100%"
            height="100%"
            preview={false}
            src={image.url}
            className="!w-full !h-full"
          />
        </article>
      ))}
    </Carousel>
  )
}

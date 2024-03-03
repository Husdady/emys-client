// Components
import Images from './Images'
import ImageCarousel from './ImageCarousel'

// Hooks
import useImageWrapper from './useImageWrapper'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function ImageWrapper(product: Product) {
  const { carouselRef, orderedImages, activeImageId, handleActiveImage } = useImageWrapper(product)

  return (
    <>
      <ImageCarousel images={orderedImages} carouselRef={carouselRef} />

      {(orderedImages.length ?? 0) >= 2 && (
        <Images
          images={orderedImages}
          activeImageId={activeImageId}
          handleActiveImage={handleActiveImage}
        />
      )}
    </>
  )
}

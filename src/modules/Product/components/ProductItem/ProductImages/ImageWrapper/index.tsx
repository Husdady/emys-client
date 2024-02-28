// Components
import Images from './Images'
import ImageCarousel from './ImageCarousel'

// Hooks
import useImageWrapper from './useImageWrapper'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function ImageWrapper(product: Product) {
  const { carouselRef, activeImageId, handleActiveImage } = useImageWrapper()

  return (
    <>
      <ImageCarousel
        images={product.images}
        carouselRef={carouselRef}
        coverImage={product.coverImage}
      />

      {(product.images?.length ?? 0) >= 2 && (
        <Images
          images={product.images}
          activeImageId={activeImageId}
          coverImage={product.coverImage}
          handleActiveImage={handleActiveImage}
        />
      )}
    </>
  )
}

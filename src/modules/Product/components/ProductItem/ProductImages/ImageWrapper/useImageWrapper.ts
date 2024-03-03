// Hooks
import { useRef, useMemo, useState, useCallback } from 'react'

// Interfaces
import { Image } from '@libs/axios/interfaces'
import { CarouselRef } from 'antd/lib/carousel'
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the ImageWrapper component
 * @param {Product} product Receive product data
 */
export default function useImageWrapper(product: Product) {
  const carouselRef = useRef<CarouselRef | null>(null)
  const [activeImageId, setActiveImageId] = useState('')

  // Callback for sort product images by cover image id
  const sortImagesByCoverImageId = useCallback((a: Image, b: Image) => {
    const coverImageId = product.coverImageId // Get cover image id

    if (a.id === coverImageId) {
      return -1 // If image id 'A' is equal to 'coverImageId', 'A' is placed before 'B'
    } else if (b.id === coverImageId) {
      return 1 // If image id 'B' is equal to 'coverImageId', 'B' is placed before 'A'
    }

    return a.id.localeCompare(b.id) // Normal order
  }, [])

  // Order images by cover image
  const orderedImages = useMemo<Image[]>(() => {
    const images = product.images ?? [] // Get product images
    const coverImageId = product.coverImageId // Get cover image id

    // Validates cover image id
    if (isString(coverImageId) && !isEmptyString(coverImageId)) {
      return [...images].sort(sortImagesByCoverImageId)
    }

    return images
  }, [product])

  // Callback for set an active image and move the Image Carousel
  const handleActiveImage = useCallback(
    (image: Image, i: number) => () => {
      setActiveImageId(image.id ?? '')

      // Go to 'x' image in the Image Carousel
      if (carouselRef.current) {
        carouselRef.current.goTo(i)
      }
    },
    [carouselRef.current]
  )

  return {
    carouselRef: carouselRef,
    orderedImages: orderedImages,
    activeImageId: activeImageId,
    handleActiveImage: handleActiveImage
  }
}
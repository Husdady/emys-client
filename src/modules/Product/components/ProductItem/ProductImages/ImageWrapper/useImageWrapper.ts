// Hooks
import { useRef, useState, useCallback } from 'react'

// Interfaces
import { Image } from '@libs/axios/interfaces'
import { CarouselRef } from 'antd/lib/carousel'

/**
 * Hook for implements the logic of the ImageWrapper component
 */
export default function useImageWrapper() {
  const carouselRef = useRef<CarouselRef | null>(null)
  const [activeImageId, setActiveImageId] = useState('')

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
    activeImageId: activeImageId,
    handleActiveImage: handleActiveImage
  }
}

// Hooks
import { useState, useCallback, useRef } from 'react'

// Interfaces
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

type Params = Pick<SharedProps, 'images' | 'handleActiveImage'>

interface ImageItemRefProps {
  showPreview: () => void
}

/**
 * Hook for implements the logic of the ImageCarousel
 * @param {Params} params Receive an 'images' and 'handleActiveImage'
 * @returns
 */
export default function useImageCarousel({ images, handleActiveImage }: Params) {
  const [pauseOnHover, setPauseOnHover] = useState(false)
  const activeImageRef = useRef<ImageItemRefProps | null>(null)

  // Callback for show the preview of the active image
  const showPreviewActiveImage = useCallback(() => {
    if (!activeImageRef.current) return
    activeImageRef.current.showPreview()
  }, [])

  // Callback for update 'pauseOnHover'
  const handlePauseOnHover = useCallback(
    (newPauseOnHover: boolean) => {
      if (pauseOnHover === newPauseOnHover) return
      setPauseOnHover(newPauseOnHover)
    },
    [pauseOnHover]
  )

  // Callback for change active image
  const afterChange = useCallback(
    (currentSlide: number) => {
      if (images.length < 2) return

      // Get image by index
      const image = images.find((_, i) => i === currentSlide)
      if (!image) return // Stop function

      handleActiveImage(image, currentSlide)()
    },
    [images, handleActiveImage]
  )

  return {
    afterChange: afterChange,
    pauseOnHover: pauseOnHover,
    activeImageRef: activeImageRef,
    handlePauseOnHover: handlePauseOnHover,
    showPreviewActiveImage: showPreviewActiveImage
  }
}

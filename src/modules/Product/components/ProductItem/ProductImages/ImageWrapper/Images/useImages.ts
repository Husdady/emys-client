// Hooks
import { useCallback } from 'react'
import useMounted from '@hooks/useMounted'

// Interfaces
import { Image } from '@libs/axios/interfaces'
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

// Utils
import changePreviewText from './utils/changePreviewText'

type Params = Pick<SharedProps, 'carouselRef' | 'handleActiveImage'>

/**
 * Hook for implements the logic of the Images component
 * @param {Params} params Receive a 'handleActiveImage'
 */
export default function useImages({ carouselRef, handleActiveImage }: Params) {
  // Callback for handle click event on Image
  const handleClickImage = useCallback(
    (image: Image, i: number) => () => {
      handleActiveImage(image, i)()
      carouselRef.current?.autoPlay()
    },
    [handleActiveImage, carouselRef.current]
  )

  useMounted(() => {
    changePreviewText()
  }, [])

  return {
    handleClickImage: handleClickImage
  }
}

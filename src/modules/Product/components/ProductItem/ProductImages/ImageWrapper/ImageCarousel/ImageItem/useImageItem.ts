// Hooks
import { useMemo, useState, useCallback } from 'react'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'

// Interfaces
import { Image } from '@libs/axios/interfaces'

/**
 * Hook for implements the logic of the ImageItem component
 * @param {Image} params
 */
export default function useImageItem(image: Image) {
  const isBiggestTabletScreen = useBiggestTabletScreen()
  const [isShowingTarget, setShowingTarget] = useState(true)
  const [isPreviewVisible, setPreviewVisible] = useState(false)

  // Define shared props of the Image
  const imageProps = useMemo(
    () => ({
      src: image.url,
      width: image.width,
      alt: image.filename,
      height: image.height,
      className: '!w-full !h-[32.5rem] !max-h-[32.5rem] px-4 pt-4 pb-8',
      preview: {
        visible: isPreviewVisible,
        onVisibleChange: (visible: boolean) => setPreviewVisible(visible)
      }
    }),
    [image, isPreviewVisible]
  )

   // Callback for show preview Image
   const showPreview = useCallback(() => {
    setPreviewVisible(true)
    setShowingTarget(false)
  }, [])

  // Callback for show Image target
  const showTarget = useCallback(() => {
    if (isShowingTarget || isPreviewVisible) return
    setShowingTarget(true)
  }, [isShowingTarget, isPreviewVisible])

  // Callback for handle click on Image target (Zoom image)
  const handleClickTarget = useCallback(() => {
    setShowingTarget(false)
    setPreviewVisible(true)
  }, [])

  return {
    imageProps: imageProps,
    showTarget: showTarget,
    showPreview: showPreview,
    isShowingTarget: isShowingTarget,
    isBiggestTabletScreen: isBiggestTabletScreen,
    handleClickTarget: handleClickTarget
  }
}

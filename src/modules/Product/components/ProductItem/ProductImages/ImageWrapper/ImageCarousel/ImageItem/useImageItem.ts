// Librarys
import { useMemo, useState, useCallback, useImperativeHandle, ForwardedRef } from 'react'

// Hooks
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'

// Interfaces
import { ImageItemProps } from './types'

export interface Params extends ImageItemProps {
  ref: ForwardedRef<unknown>
}

/**
 * Hook for implements the logic of the ImageItem component
 * @param {Params} params Receive a 'ref', 'handlePauseOnHover' and Image props
 */
export default function useImageItem({ ref, ...image }: Params) {
  const isBiggestTabletScreen = useBiggestTabletScreen()
  const [isShowingPreview, setShowingPreview] = useState(false)

  // Define shared props of the Image
  const imageProps = useMemo(
    () => ({
      src: image.url,
      width: image.width,
      alt: image.filename,
      height: image.height,
      className: '!w-full !h-[32.5rem] !max-h-[32.5rem] px-4 pt-4 pb-8',
      preview: {
        visible: isShowingPreview,
        onVisibleChange: (visible: boolean) => setShowingPreview(visible)
      }
    }),
    [image, isShowingPreview]
  )

  // Callback for show preview Image
  const showPreview = useCallback(() => {
    setShowingPreview(true)
  }, [])

  useImperativeHandle(ref, () => ({
    showPreview: showPreview
  }))

  return {
    imageProps: imageProps,
    showPreview: showPreview,
    isShowingPreview: isShowingPreview,
    isBiggestTabletScreen: isBiggestTabletScreen
  }
}

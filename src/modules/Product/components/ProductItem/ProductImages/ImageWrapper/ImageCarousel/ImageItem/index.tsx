// Librarys
import { Image } from 'antd/lib'
import { forwardRef } from 'react'

// Components
import ZoomImage from '@components/ZoomImage'

// Hooks
import useImageItem from './useImageItem'

// Interfaces
import { ImageItemProps } from './interfaces'

const ImageItem = forwardRef((props: ImageItemProps, ref) => {
  const {
    imageProps,
    showPreview,
    onMouseEnter,
    onMouseLeave,
    isShowingPreview,
    isBiggestTabletScreen
  } = useImageItem({ ref: ref, ...props })

  return (
    <article className="image-item relative !w-full !h-[32.5rem] !max-h-[32.5rem]">
      {isBiggestTabletScreen && <Image {...imageProps} />}

      {!isBiggestTabletScreen && (
        <ZoomImage
          src={props.url}
          width={props.width}
          height={props.height}
          onClickTarget={showPreview}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isShowingPreview={isShowingPreview}
        >
          <Image {...imageProps} />
        </ZoomImage>
      )}
    </article>
  )
})

export default ImageItem

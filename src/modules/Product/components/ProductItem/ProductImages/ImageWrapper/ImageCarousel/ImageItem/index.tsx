// Librarys
import { Image } from 'antd/lib'
import { forwardRef } from 'react'

// Components
import ZoomImage from '@components/ZoomImage'

// Hooks
import useImageItem from './useImageItem'

// Types
import type { ImageItemProps } from './types'
import classnames from '@root/src/utils/classnames'

const ImageItem = forwardRef(({ className, ...props }: ImageItemProps, ref) => {
  const { imageProps, showPreview, isShowingPreview, isBiggestTabletScreen } = useImageItem({
    ref: ref,
    ...props
  })

  return (
    <article
      className={classnames([
        className,
        'image-item relative !w-full flex items-center justify-center'
      ])}
    >
      {isBiggestTabletScreen && <Image {...imageProps} />}

      {!isBiggestTabletScreen && (
        <ZoomImage
          src={props.url}
          width={props.width}
          height={props.height}
          onClickTarget={showPreview}
          isShowingPreview={isShowingPreview}
        >
          <Image {...imageProps} />
        </ZoomImage>
      )}
    </article>
  )
})

export default ImageItem

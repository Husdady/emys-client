// Librarys
import { Image } from 'antd/lib'
import { forwardRef } from 'react'

// Components
import ZoomImage from '@components/ZoomImage'

// Hooks
import useImageItem from './useImageItem'

// Types
import type { ImageItemProps } from './types'

// Utils
import classnames from '@utils/classnames'

const ImageItem = forwardRef(({ className, ...props }: ImageItemProps, ref) => {
  const { imageProps, showPreview, isShowingPreview, isBiggestTabletScreen } = useImageItem({
    ref: ref,
    ...props
  })

  return (
    <article className={classnames([className, 'image-item relative !w-full'])}>
      {isBiggestTabletScreen && <Image {...imageProps} />}

      {!isBiggestTabletScreen && (
        <ZoomImage
          src={props.url}
          width={props.width}
          height={props.height}
          className={className}
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

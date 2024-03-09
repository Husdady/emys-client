// Librarys
import { Image } from 'antd/lib'
import dynamic from 'next/dynamic'

// Components
import ZoomImage from '@components/ZoomImage'
import MagnifyingGlass from '@components/Icons/MagnifyingGlass'

// Hooks
import useImageItem from './useImageItem'

// Interfaces
import { Image as ImageModel } from '@libs/axios/interfaces'

// Lazy Components
const Button = dynamic(() => import('@components/Button'))

export default function ImageItem(props: ImageModel) {
  const {
    showTarget,
    showPreview,
    imageProps,
    isShowingTarget,
    isBiggestTabletScreen,
    handleClickTarget
  } = useImageItem(props)

  return (
    <article className="image-item relative !w-full !h-[32.5rem] !max-h-[32.5rem]">
      <Button
        title=""
        onClick={showPreview}
        icon={<MagnifyingGlass size="sm" />}
        className="btn-magnifying-glass transition-colors !absolute top-[2%] left-[2.5%] !p-2.5 rounded-full z-[9999] bg-gray-100 text-gray-600 hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-pink-200 dark:hover:text-pink-900 border-[3px] border-gray-200 dark:border-gray-500 dark:hover:border-pink-100"
      />

      {isBiggestTabletScreen && <Image {...imageProps} />}

      {!isBiggestTabletScreen && (
        <ZoomImage
          src={props.url}
          width={props.width}
          height={props.height}
          onMouseEnter={showTarget}
          onClickTarget={handleClickTarget}
          isShowingTarget={isShowingTarget}
        >
          <Image {...imageProps} />
        </ZoomImage>
      )}
    </article>
  )
}

// Librarys
import { memo } from 'react'

// Hooks
import useZoomImage from './useZoomImage'

// Interfaces
import { ZoomImageProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { DEFAULT_SCALE } from './constants'

function ZoomImage({
  scale = DEFAULT_SCALE,
  isShowingPreview = true,
  src,
  width,
  height,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  onClickTarget
}: ZoomImageProps) {
  const {
    opacity,
    targetRef,
    sourceRef,
    targetWidth,
    containerRef,
    targetStyles,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  } = useZoomImage({
    width: width,
    scale: scale,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    isShowingPreview: isShowingPreview
  })

  return (
    <div
      ref={containerRef}
      onMouseMove={isShowingPreview ? undefined : handleMouseMove}
      onMouseEnter={isShowingPreview ? undefined : handleMouseEnter}
      onMouseLeave={isShowingPreview ? undefined : handleMouseLeave}
      className={classnames([className, 'relative overflow-hidden'])}
    >
      <div ref={sourceRef} className={opacity === 1 ? 'opacity-0' : undefined}>
        {children}
      </div>

      <img
        src={src}
        alt="target"
        ref={targetRef}
        width={targetWidth}
        style={targetStyles}
        onClick={onClickTarget}
        height={height * scale}
        className="target-image absolute max-w-[initial]"
      />
    </div>
  )
}

export default memo(ZoomImage, (prevProps, nextProps) => {
  return (
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className &&
    prevProps.isShowingPreview === nextProps.isShowingPreview &&
    prevProps.onMouseEnter?.toString() === nextProps.onMouseEnter?.toString() &&
    prevProps.onMouseLeave?.toString() === nextProps.onMouseLeave?.toString() &&
    prevProps.onClickTarget?.toString() === nextProps.onClickTarget?.toString()
  )
})

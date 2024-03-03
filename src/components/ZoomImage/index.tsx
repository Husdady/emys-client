// Hooks
import useZoomImage from './useZoomImage'

// Interfaces
import { ZoomImageProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { DEFAULT_SCALE, DEFAULT_TARGET_WIDTH, MIN_TARGET_WIDTH } from './constants'

export default function ZoomImage({
  scale = DEFAULT_SCALE,
  isShowingTarget = true,
  src,
  width,
  height,
  children,
  className,
  onMouseEnter,
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
    handleSetOpacity
  } = useZoomImage({
    width: width,
    scale: scale,
    onMouseEnter: onMouseEnter,
    isShowingTarget: isShowingTarget
  })

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleSetOpacity(0)}
      className={classnames([className, 'relative overflow-hidden'])}
    >
      <div ref={sourceRef} className={opacity === 1 ? 'opacity-0' : undefined}>
        {children}
      </div>

      {isShowingTarget && (
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
      )}
    </div>
  )
}

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
    targetRef,
    sourceRef,
    containerRef,
    targetStyles,
    handleMouseMove,
    handleMouseEnter,
    handleSetOpacity
  } = useZoomImage({ onMouseEnter: onMouseEnter, isShowingTarget: isShowingTarget })

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleSetOpacity(0)}
      className={classnames([className, 'relative overflow-hidden'])}
    >
      <div ref={sourceRef}>{children}</div>

      {isShowingTarget && (
        <img
          src={src}
          alt="target"
          ref={targetRef}
          style={targetStyles}
          onClick={onClickTarget}
          height={height * scale}
          width={width < MIN_TARGET_WIDTH ? DEFAULT_TARGET_WIDTH : width * scale}
          className="target-image absolute max-w-[initial]"
        />
      )}
    </div>
  )
}

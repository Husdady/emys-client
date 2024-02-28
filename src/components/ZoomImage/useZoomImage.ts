// Hooks
import { useRef, useMemo, useState, useCallback, MouseEvent } from 'react'

// Interfaces
import { Offset, ZoomImageProps } from './interfaces'

// Constants
import { DEFAULT_OFFSET } from './constants'

export type Params = Pick<ZoomImageProps, 'onMouseEnter' | 'isShowingTarget'>

/**
 * Hook for implements the logic of the ZoomImage component
 * @param {Params} params Receive a 'onMouseEnter'
 */
export default function useZoomImage({ onMouseEnter, isShowingTarget }: Params) {
  const [opacity, setOpacity] = useState(0)
  const sourceRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLImageElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState<Offset>(DEFAULT_OFFSET)

  // Define the target styles
  const targetStyles = useMemo(
    () => ({
      opacity: opacity,
      top: `${offset.top}px`,
      left: `${offset.left}px`
    }),
    [offset, opacity]
  )

  // Callback for set Opacity
  const handleSetOpacity = useCallback(
    (newOpacityLevel: number) => (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      if (!isShowingTarget) return

      if (opacity === newOpacityLevel) return
      setOpacity(newOpacityLevel)
    },
    [opacity, isShowingTarget]
  )

  // Event 'MouseEnter' on Container
  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      handleSetOpacity(1)(e)
      onMouseEnter?.(e)
    },
    [onMouseEnter, handleSetOpacity]
  )

  // Event 'MouseMove' on Container
  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isShowingTarget) return

      // Validates ref
      if (!targetRef.current || !sourceRef.current || !containerRef.current) return

      // Get react of the each ref
      const targetRect = targetRef.current.getBoundingClientRect()
      const sourceRect = sourceRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      // Get ratio of each ref
      const xRatio = (targetRect.width - containerRect.width) / sourceRect.width
      const yRatio = (targetRect.height - containerRect.height) / sourceRect.height

      // Get the new top and left position
      const top = Math.max(Math.min(e.pageY - sourceRect.top, sourceRect.height), 0)
      const left = Math.max(Math.min(e.pageX - sourceRect.left, sourceRect.width), 0)

      // Update offset
      setOffset({ top: top * -yRatio, left: left * -xRatio })
    },
    [isShowingTarget, targetRef.current, sourceRef.current, containerRef.current]
  )

  return {
    targetRef: targetRef,
    sourceRef: sourceRef,
    containerRef: containerRef,
    targetStyles: targetStyles,
    handleMouseMove: handleMouseMove,
    handleMouseEnter: handleMouseEnter,
    handleSetOpacity: handleSetOpacity
  }
}

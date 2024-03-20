// Interfaces
import { MouseEvent } from 'react'
import { OnlyChildrenProp, OnlyClassNameProp } from '@config/interfaces'

export interface Offset {
  top: number
  left: number
}

export interface ZoomImageProps
  extends OnlyChildrenProp,
    OnlyClassNameProp,
    Pick<HTMLImageElement, 'src' | 'width' | 'height'> {
  scale?: number
  isShowingPreview?: boolean
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onClickTarget?: (e: MouseEvent<HTMLImageElement>) => void
}

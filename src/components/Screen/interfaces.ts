// Types
import type { ReactNode } from 'react'
import type { ImageProps } from 'next/image'
import type { SpanType } from '@config/global-types'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'
import {
  TitleProp,
  OnlyStyleProp,
  OnlyClassNameProp
} from '@config/global-interfaces'

export interface ScreenProps
  extends TitleProp,
    OnlyStyleProp,
    OnlyClassNameProp {
  image?: Partial<ImageProps>
  button?: Partial<ButtonProps>
  showButton?: boolean
  customDescription?: SpanType
  description: string | ReactNode
}

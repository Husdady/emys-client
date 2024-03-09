// Types
import type { ReactNode } from 'react'
import type { ImageProps } from 'next/image'
import type { SpanType } from '@config/globalTypes'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'
import { TitleProp, OnlyStyleProp, OnlyClassNameProp } from '@config/globalInterfaces'

export interface ScreenProps extends TitleProp, OnlyStyleProp, OnlyClassNameProp {
  image?: Partial<ImageProps>
  button?: Partial<ButtonProps>
  showButton?: boolean
  customDescription?: SpanType
  description: string | ReactNode
}

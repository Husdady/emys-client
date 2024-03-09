// Types
import type { ReactNode } from 'react'
import type { SpanType } from '@config/globalTypes'

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

export interface TagProps extends OnlyClassNameProp, Omit<SpanType, 'title'> {
  title: string
  icon?: ReactNode
  titlePopup?: string
  innerClassName?: string
}

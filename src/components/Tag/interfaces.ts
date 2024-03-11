// Types
import type { ReactNode } from 'react'
import type { SpanType } from '@config/types'

// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

export interface TagProps extends OnlyClassNameProp, Omit<SpanType, 'title'> {
  title: string
  icon?: ReactNode
  titlePopup?: string
  innerClassName?: string
}

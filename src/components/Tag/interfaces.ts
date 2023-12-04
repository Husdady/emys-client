// Types
import type { ReactNode } from 'react'
import type { SpanType } from '@config/global-types'

// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

export interface TagProps extends OnlyClassNameProp, Omit<SpanType, 'title'> {
  title: string
  icon?: ReactNode
  titlePopup?: string
}

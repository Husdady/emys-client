// Types
import type { ReactNode } from 'react'

// Interfaces
import { OnlyChildrenProp, OnlyClassNameProp } from '@config/globalInterfaces'

export interface BoxWrapperProps extends OnlyClassNameProp, Partial<OnlyChildrenProp> {
  fallback?: ReactNode
}

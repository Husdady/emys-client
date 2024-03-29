// React
import React from 'react'

// Types
import type { DivType } from '@config/types'

// Interfaces
import { OnlyStyleProp, OnlyClassNameProp } from '@config/interfaces'

export interface IconProps
  extends OnlyStyleProp,
    OnlyClassNameProp,
    Omit<DivType, 'name' | 'onClick' | 'className' | 'style'> {
  color?: React.CSSProperties['color']
  useHoverEffect?: boolean
  size?:
    | 'xs'
    | 'smaller'
    | 'xsm'
    | 'sm'
    | 'smx'
    | 'smd'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xsx'
    | 'xxl'
    | 'xxxl'
    | 'xml'
    | 'bigger'
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

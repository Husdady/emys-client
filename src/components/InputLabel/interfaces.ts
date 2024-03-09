// Types
import { LabelType } from '@config/globalTypes'

// Interfaces
import React from 'react'

export interface InputLabelProps {
  id?: string
  icon?: React.ReactNode
  style?: React.CSSProperties
  title?: React.ReactNode | JSX.Element
  className?: LabelType['className']
}

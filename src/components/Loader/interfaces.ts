// Interfaces
import { CSSProperties } from 'react'
import { OnlyStyleProp, OnlyClassNameProp } from '@config/interfaces'

export interface LoaderProps extends OnlyStyleProp, OnlyClassNameProp {
  height?: CSSProperties['height']
}

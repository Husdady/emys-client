// Interfaces
import { CSSProperties } from 'react'
import { OnlyStyleProp, OnlyClassNameProp } from '@config/globalInterfaces'

export interface LoaderProps extends OnlyStyleProp, OnlyClassNameProp {
  height?: CSSProperties['height']
}

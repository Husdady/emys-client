// Interfaces
import { ReactNode, HTMLAttributes } from 'react'
import { OnlyStyleProp, OnlyClassNameProp } from '@config/global-interfaces'

export interface MessageProps extends OnlyStyleProp, OnlyClassNameProp {
  value: string
  icon: ReactNode
  customValue?: HTMLAttributes<HTMLHeadingElement>
}

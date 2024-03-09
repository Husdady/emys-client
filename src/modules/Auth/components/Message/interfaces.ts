// Interfaces
import { ReactNode, HTMLAttributes } from 'react'
import { OnlyStyleProp, OnlyClassNameProp } from '@config/globalInterfaces'

export interface MessageProps extends OnlyStyleProp, OnlyClassNameProp {
  value: string
  icon: ReactNode
  customValue?: HTMLAttributes<HTMLHeadingElement>
}

// Types
import type { ImageProps } from 'next/image'

// Interfaces
import { MouseEventHandler } from 'react'
import { OnlyClassNameProp } from '@config/global-interfaces'

export interface HomeCardProps extends OnlyClassNameProp {
  id?: string
  title: string
  description: string
  buttonTitle?: string
  animationClassName?: string
  animationUtilityClassName?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  imageProps: Partial<Omit<ImageProps, 'priority' | 'className'>>
}

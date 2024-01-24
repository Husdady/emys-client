// Types
import type { ReactNode } from 'react'

// Interfaces
import { OnlyChildrenProp, OnlyClassNameProp } from '@config/global-interfaces'

export interface AsideProps extends OnlyChildrenProp, OnlyClassNameProp {
  title: string
  description: ReactNode
  titleClassName?: string
}

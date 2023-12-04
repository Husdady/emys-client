// Interfaces
import { OnlyChildrenProp, OnlyClassNameProp } from '@config/global-interfaces'

export interface AsideProps extends OnlyChildrenProp, OnlyClassNameProp {
  title: string
  titleClassName?: string
  description: string
}

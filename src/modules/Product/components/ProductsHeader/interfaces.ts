// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

export interface ProductsHeaderProps extends OnlyClassNameProp {
  title: string
  isDisabledNextArrow: boolean
  isDisabledPreviousArrow: boolean
  onPrevious: () => void
  onNext: () => void
}

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

export interface ProductsHeaderProps extends OnlyClassNameProp {
  title: string
  isDisabledNextArrow: boolean
  isDisabledPreviousArrow: boolean
  onPrevious: () => void
  onNext: () => void
}

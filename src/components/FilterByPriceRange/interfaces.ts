// Interfaces
import { FormLabel } from '@config/interfaces'

export interface PriceFilterProps extends FormLabel {
  minPrice?: number
  maxPrice?: number
  buttonTitle?: string
  buttonClassName?: string
  innerClassName?: string
  containerClassName?: string
  isDisableApplyPriceFilterButton?: boolean
  onApplyPriceFilter: () => void
  onChangeMinPrice?: (value: number | null) => void
  onChangeMaxPrice?: (value: number | null) => void
  onChangePriceRange?: (values: Array<number | null>) => void
}

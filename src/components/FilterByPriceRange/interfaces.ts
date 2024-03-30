// Interfaces
import { FormLabel } from '@config/interfaces'

export interface PriceFilterProps extends FormLabel {
  minPrice?: number
  maxPrice?: number
  buttonTitle?: string
  innerClassName?: string
  buttonClassName?: string
  containerClassName?: string
  hideButtonApplyFilters?: boolean
  isDisableApplyPriceFilterButton?: boolean
  onApplyPriceFilter?: () => void
  onChangeMinPrice?: (value: number | null) => void
  onChangeMaxPrice?: (value: number | null) => void
  onChangePriceRange?: (values: Array<number | null>) => void
}

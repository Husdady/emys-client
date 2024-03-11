// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Constants
import { nullOption, sortDateOptionsNotNullables } from '@data/sortOptions'

export const nameSortOptions: SelectProps['options'] = [
  { value: 'name/asc', label: 'Nombre ascendente' },
  { value: 'name/desc', label: 'Nombre descendente' }
]

export const priceSortOptions: SelectProps['options'] = [
  { value: 'price/desc', label: 'Precio más alto' },
  { value: 'price/asc', label: 'Precio más bajo' }
]

const sortOptions: SelectProps['options'] = [
  ...nullOption,
  ...nameSortOptions,
  ...priceSortOptions,
  ...sortDateOptionsNotNullables
]

export default sortOptions

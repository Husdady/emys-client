// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Constants
import { nullOption, sortDateOptionsNotNullables } from '@assets/data/sort-options'

export const sortOptions: SelectProps['options'] = [
  ...nullOption,
  { value: 'author/asc', label: 'Nombre ascendente' },
  { value: 'author/desc', label: 'Nombre descendente' },
  ...sortDateOptionsNotNullables
]
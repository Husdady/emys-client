// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Constants
import { PREDEFINED_VALUE } from '@components/Select/constants'

const options: SelectProps['options'] = [
  PREDEFINED_VALUE,
  { value: 'true', label: 'Productos en stock' },
  { value: 'false', label: 'Productos sin stock' }
]

export default options

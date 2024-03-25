// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Constants
import { PREDEFINED_VALUE } from '@components/Select/constants'
import { SEYTU_TYPE, PRODUCT_TYPE, OMNILIFE_TYPE } from '@modules/Products/api/constants'

const options: SelectProps['options'] = [
  PREDEFINED_VALUE,
  { value: SEYTU_TYPE, label: 'Productos Seytú' },
  { value: OMNILIFE_TYPE, label: 'Productos Omnilife' },
  { value: PRODUCT_TYPE, label: 'Productos que no sean Seytú ni Omnilife' }
]

export default options

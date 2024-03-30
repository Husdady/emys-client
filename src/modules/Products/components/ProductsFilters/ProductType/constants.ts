// Interfaces
import { GroupRadioButtonProps } from '@components/GroupRadioButton/interfaces'

// Constants
import { SEYTU_TYPE, PRODUCT_TYPE, OMNILIFE_TYPE } from '@modules/Products/api/constants'
import { FallbackItemConfig } from '@components/GroupRadioButton/Fallback/interfaces'

export const ALL = 'all'
export const PRODUCT_TYPES = 'product-types'

export const options: GroupRadioButtonProps['options'] = [
  { value: ALL, label: 'Todos los productos' },
  { value: SEYTU_TYPE, label: 'Productos Seytú' },
  { value: OMNILIFE_TYPE, label: 'Productos Omnilife' },
  { value: PRODUCT_TYPE, label: 'Productos que no sean de la marca Seytú ni Omnilife' }
]

export const fallbackConfig: FallbackItemConfig[] = [
  { className: '!w-36' },
  { className: '!w-28' },
  { className: '!w-32' },
  { className: '!w-[23rem]' }
]

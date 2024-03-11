// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Constants
import { PREDEFINED_VALUE } from '@components/Select/constants'

export const nullOption: SelectProps['options'] = [PREDEFINED_VALUE]

export const sortDateOptions: SelectProps['options'] = [
  ...nullOption,
  { value: 'createdAt/desc', label: 'Fecha de creación más reciente' },
  { value: 'createdAt/asc', label: 'Fecha de creación más antigua' },
  { value: 'updatedAt/desc', label: 'Fecha de actualización más reciente' },
  { value: 'updatedAt/asc', label: 'Fecha de actualización más antigua' }
]

// Get sort date options that its value not is equal to 'null'
export const sortDateOptionsNotNullables = sortDateOptions.filter((item) => item.value !== 'null')

export const nameSortOptions = [
  { value: 'fullname/asc', label: 'Nombre ascendente' },
  { value: 'fullname/desc', label: 'Nombre descendente' }
]

export const emailSortOptions = [
  { value: 'email/asc', label: 'Correo electrónico ascendente' },
  { value: 'email/desc', label: 'Correo electrónico descendente' }
]

export const sortOptions: SelectProps['options'] = [
  ...nullOption,
  ...nameSortOptions,
  ...sortDateOptionsNotNullables
]

export const sortNameAndEmailOptions: SelectProps['options'] = [
  ...nullOption,
  ...nameSortOptions,
  ...emailSortOptions,
  ...sortDateOptionsNotNullables
]

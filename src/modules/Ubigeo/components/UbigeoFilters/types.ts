// Interfaces
import { UbigeoFiltersProps } from './interfaces'
import { SelectProps } from '@components/Select/interfaces'

// Types
export type UbigeoFilterFields = 'country' | 'region' | 'province' | 'district'
export type UbigeoFiltersConfig = Pick<SelectProps, 'noSelectionLabel' | 'containerClassName'>

export type UseUbigeoFiltersParams = Pick<UbigeoFiltersProps, 'setValue' | 'deleteQueryParam'>

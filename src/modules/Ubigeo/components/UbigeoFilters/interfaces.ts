// Types
import type { UbigeoFilterFields } from './types'
import type { FieldValues, UseFormSetValue } from 'react-hook-form'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

export interface UbigeoFiltersConfig
  extends Pick<SelectProps, 'textLabel' | 'noSelectionLabel' | 'containerClassName'> {
  classLabelPlaceholder?: string
}

export interface UbigeoFiltersProps {
  setValue: UseFormSetValue<FieldValues>
  config: Record<UbigeoFilterFields, UbigeoFiltersConfig>
  watch: (field: UbigeoFilterFields) => string | undefined
  getValues: (field: UbigeoFilterFields) => string | undefined
  deleteQueryParam: (field: UbigeoFilterFields) => void
}

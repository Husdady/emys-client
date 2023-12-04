// Types
import type { ReactNode } from 'react'
import type { FieldValues, UseFormSetValue } from 'react-hook-form'
import type { UbigeoFilterFields, UbigeoFiltersConfig } from './types'

export interface UbigeoFiltersProps {
  onFilter: () => void
  setValue: UseFormSetValue<FieldValues>
  config: Record<UbigeoFilterFields, UbigeoFiltersConfig>
  watch: (field: UbigeoFilterFields) => string | undefined
  getValues: (field: UbigeoFilterFields) => string | undefined
  deleteQueryParam: (field: UbigeoFilterFields) => void
  nodeAtStart?: ReactNode
  nodeAfterRegions?: ReactNode
  nodeAfterCountries?: ReactNode
  nodeAfterProvinces?: ReactNode
  nodeAfterDistricts?: ReactNode
}

// Types
import type { FilterProps } from '@components/Select/types'

export interface FilterByDistrictProps extends FilterProps {
  regionId?: string
  countryId?: string
  provinceId?: string
  addDefaultValue?: boolean
  noSelectionLabel?: string
  classLabelPlaceholder?: string
}

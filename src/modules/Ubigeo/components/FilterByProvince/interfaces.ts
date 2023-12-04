// Types
import type { FilterProps } from '@components/Select/types'

export interface FilterByProvinceProps extends FilterProps {
  regionId?: string
  countryId?: string
  addDefaultValue?: boolean
  noSelectionLabel?: string
}

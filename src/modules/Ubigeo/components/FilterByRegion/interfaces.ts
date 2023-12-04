// Types
import type { FilterProps } from '@components/Select/types'

export interface FilterByRegionProps extends FilterProps {
  countryId?: string
  addDefaultValue?: boolean
  noSelectionLabel?: string
}

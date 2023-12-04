// Interfaces
import { SelectProps } from '@components/Select/interfaces'

export interface ProvincesProps
  extends Pick<SelectProps, 'error' | 'onChange' | 'textLabel' | 'selectedValue'> {
  regionId?: string
  countryId?: string
}

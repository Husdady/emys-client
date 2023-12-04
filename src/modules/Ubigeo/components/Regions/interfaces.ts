// Interfaces
import { SelectProps } from '@components/Select/interfaces'

export interface RegionsProps
  extends Pick<SelectProps, 'error' | 'onChange' | 'textLabel' | 'selectedValue'> {
  countryId?: string
}

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

export interface CountriesProps
  extends Pick<
    SelectProps,
    'error' | 'onChange' | 'textLabel' | 'selectedValue' | 'containerClassName'
  > {
  onChangeCountry?: SelectProps['onChange']
  defaultCountryName?: string | null
}

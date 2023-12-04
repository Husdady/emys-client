// Interfaces
import { SelectProps } from '@components/Select/interfaces'

export interface DistrictsProps
  extends Pick<SelectProps, 'error' | 'onChange' | 'textLabel' | 'selectedValue'> {
  provinceId?: string
}

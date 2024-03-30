// Interfaces
import { SelectProps } from '@components/Select/interfaces'

export interface SortByProps extends Omit<SelectProps, 'mode'> {
  classLabel?: string
}

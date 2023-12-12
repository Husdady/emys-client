// Interfaces
import { SelectProps, OptionSelectedProps } from './interfaces'

export type SelectMode = 'sort' | 'normal'
export type SelectSortProps = Omit<SelectProps, 'icon'>

export type FilterProps = Pick<
  SelectProps,
  'onChange' | 'selectedValue' | 'containerClassName' | 'textLabel'
>

export type UseSelectParams = Omit<OptionSelectedProps, 'icon' | 'style' | 'className'>

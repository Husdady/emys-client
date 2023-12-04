// Interfaces
import { MultiSelectProps } from './interfaces'
import { CheckboxEventParams } from '@components/Checkbox/interfaces'

// Types
export type OnChangeOption = (params: CheckboxEventParams) => void
export type FilterProps = Pick<MultiSelectProps, 'onChange' | 'selectedValues'>

export type OptionsSelectedProps = Omit<
  MultiSelectProps,
  'label' | 'error' | 'customError' | 'textLabel' | 'containerStyle' | 'containerClassName'
>

export type UseMultiSelectParams = Omit<
  OptionsSelectedProps,
  'style' | 'className' | 'enableVirtualization'
>

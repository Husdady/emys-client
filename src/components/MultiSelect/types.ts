// Interfaces
import { MultiSelectProps, OptionsSelectedProps } from './interfaces'
import { CheckboxEventParams } from '@components/Checkbox/interfaces'

// Types
export type OnChangeOption = (params: CheckboxEventParams) => void
export type FilterProps = Pick<MultiSelectProps, 'onChange' | 'selectedValues'>

export type UseMultiSelectParams = Omit<
  OptionsSelectedProps,
  'style' | 'className' | 'enableVirtualization'
>

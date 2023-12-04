// Types
import type { OnChangeOption } from './types'

// Interfaces
import { MultiSelectProps } from '@components/MultiSelect/interfaces'

export interface OptionsProps
  extends Pick<
    MultiSelectProps,
    | 'options'
    | 'emptyText'
    | 'selectedValues'
    | 'searchPalceholder'
    | 'canSearchOptions'
    | 'enableVirtualization'
  > {
  onChange: OnChangeOption
  isMarkedOption: (value: string) => boolean
}

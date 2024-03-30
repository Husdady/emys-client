// Types
import type { OnChangeOption } from './types'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

export interface OptionsProps
  extends Pick<
    SelectProps,
    'options' | 'emptyText' | 'selectedValue' | 'canSearchOptions' | 'searchPalceholder'
  > {
  onChange: OnChangeOption
  hideOptions: () => void
}

// Types
import type { OnChangeOption } from './types'

// Interfaces
import { Option, MultiSelectProps } from '@components/MultiSelect/interfaces'

export interface VirtualizedOptionsProps
  extends Pick<
    MultiSelectProps,
    'options' | 'emptyText' | 'selectedValues' | 'searchPlaceholder' | 'canSearchOptions'
  > {
  onChange: OnChangeOption
  isMarkedOption: (value: string) => boolean
}

export interface VirtualizedOptionProps extends Option, Pick<VirtualizedOptionsProps, 'onChange'> {
  index: number
  windowWidth: number
  isMarkedOption: (value: string) => boolean
  setOptionSize: (index: number, size: number) => void
}

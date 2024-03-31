// Types
import type { OnChangeOption } from './types'

// Interfaces
import { Option, SelectProps } from '@components/Select/interfaces'

export interface VirtualizedOptionsProps
  extends Pick<
    SelectProps,
    | 'options'
    | 'emptyText'
    | 'selectedValue'
    | 'canSearchOptions'
    | 'searchPlaceholder'
    | 'enableVirtualization'
  > {
  onChange: OnChangeOption
}

export interface VirtualizedOptionProps extends Option, Pick<VirtualizedOptionsProps, 'onChange'> {
  index: number
  windowWidth: number
  setOptionSize: (index: number, size: number) => void
}

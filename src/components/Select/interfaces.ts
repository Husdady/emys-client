// Types
import type { SelectMode } from './types'
import type { DivType } from '@config/globalTypes'

// Interfaces
import { ReactNode, CSSProperties } from 'react'
import { FormError, FormLabel, OnlyStyleProp, OnlyClassNameProp } from '@config/globalInterfaces'

export interface Option {
  label: string
  value: string
  markup?: ReactNode
}

export interface OptionSelectedProps
  extends Omit<
    SelectProps,
    'label' | 'error' | 'customError' | 'textLabel' | 'containerStyle' | 'containerClassName'
  > {
  icon: ReactNode
  hasError?: boolean
}

export interface SelectFallbackProps extends OnlyClassNameProp {
  textLabelClassName?: string
}

export interface SelectProps
  extends FormLabel,
    OnlyStyleProp,
    OnlyClassNameProp,
    Omit<FormError, 'hasError'> {
  options: Option[]
  mode?: SelectMode
  disabled?: boolean
  emptyText?: string
  selectedValue?: string
  noSelectionLabel: string
  searchPalceholder?: string
  canSearchOptions?: boolean
  enableVirtualization?: boolean
  containerStyle?: CSSProperties
  containerClassName?: DivType['className']
  onChange?: (option: Option) => void
}

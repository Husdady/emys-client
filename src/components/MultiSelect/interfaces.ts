// Types
import type { DivType } from '@config/global-types'

// Interfaces
import { ReactNode, CSSProperties } from 'react'
import { FormError, FormLabel, OnlyStyleProp, OnlyClassNameProp } from '@config/global-interfaces'

export interface Option {
  label: string
  value: string
  component?: ReactNode
}

export interface BadgeProps extends Pick<MultiSelectProps, 'options' | 'noSelectionLabel'> {
  values: string[]
}

export interface MultiSelectProps
  extends FormLabel,
    OnlyStyleProp,
    OnlyClassNameProp,
    Omit<FormError, 'hasError'> {
  options: Option[]
  disabled?: boolean
  emptyText?: string
  selectedValues?: string[]
  noSelectionLabel: string
  searchPalceholder?: string
  canSearchOptions?: boolean
  enableVirtualization?: boolean
  containerStyle?: CSSProperties
  containerClassName?: DivType['className']
  onChange?: (values: string[]) => void
}

export interface OptionsSelectedProps
  extends Omit<
    MultiSelectProps,
    'label' | 'error' | 'customError' | 'textLabel' | 'containerStyle' | 'containerClassName'
  > {
  hasError?: boolean
}

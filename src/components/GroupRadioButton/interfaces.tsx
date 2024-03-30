// Librarys
import React from 'react'

// Types
import type { RadioButtonColor } from './Options/types'

// Interfaces
import { FormLabel, FormError } from '@config/interfaces'
import { RadioButtonProps as Option } from './Options/interfaces'

export interface GroupRadioButtonProps extends FormLabel, Omit<FormError, 'hasError'> {
  name: string
  options: Option[]
  emptyLabel?: string
  color?: RadioButtonColor
  defaultOption?: number | string
  onChange?: (params: ChangeOptionParams) => void
}

export interface ChangeOptionParams {
  index: number
  position: number
  options: Option[]
  currentOption: Option
  event: React.ChangeEvent<HTMLInputElement>
}

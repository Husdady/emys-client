// Librarys
import React from 'react'

// Types
import type { RadioButtonColor } from './types'
import type { InputType } from '@config/types'

// Interfaces
import { OnlyStyleProp, OnlyClassNameProp } from '@config/interfaces'

export interface RadioButtonProps extends OnlyStyleProp, OnlyClassNameProp {
  id?: string
  name?: string
  label: string
  checked?: boolean
  disabled?: boolean
  color?: RadioButtonColor
  value: InputType['value']
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  customContainer?: OnlyStyleProp & OnlyClassNameProp
}

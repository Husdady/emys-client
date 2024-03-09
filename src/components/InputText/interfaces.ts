// Types
import type { CustomInputProps } from './types'
import type { DivType, InputType } from '@config/globalTypes'

// Interfaces
import { CSSProperties, KeyboardEvent } from 'react'
import { FormError, FormLabel } from '@config/globalInterfaces'

export interface InputTextProps extends Omit<InputType, 'type'>, FormError, FormLabel {
  type?: 'text' | 'email' | 'number' | 'password'
  icon?: React.ReactNode
  customInput?: CustomInputProps
  containerStyle?: CSSProperties
  containerClassName?: DivType['className']
  innerClassName?: DivType['className']
  hideArrows?: boolean
  isShowingPassword?: boolean
  isShowingClearIcon?: boolean
  clearIconClassName?: string
  preventAutoComplete?: boolean
  hidePlaceholderOnFocus?: boolean
  onClear?: () => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
}

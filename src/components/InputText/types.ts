// Types
import type { InputType } from '@config/globalTypes'

// Interfaces
import { InputTextProps } from './interfaces'
import { InputTypeRef } from '@config/globalInterfaces'

export type InputIconProps = Pick<InputTextProps, 'icon' | 'type'>

export type CustomInputProps = InputTypeRef &
  Omit<InputType, 'type' | 'style' | 'className' | 'placeholder'>

export type UseInputTextParams = Omit<
  InputTextProps,
  | 'icon'
  | 'label'
  | 'textLabel'
  | 'error'
  | 'customError'
  | 'style'
  | 'containerStyle'
  | 'value'
  | 'readOnly'
  | 'autoComplete'
>

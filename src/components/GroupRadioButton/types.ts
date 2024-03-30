// Interfaces
import { GroupRadioButtonProps } from './interfaces'

export type RadioButtonOptionsProps = Omit<
  GroupRadioButtonProps,
  'error' | 'hasError' | 'label' | 'textLabel'
>

export type PickSomeRadioButtonProps = Omit<
  GroupRadioButtonProps,
  'name' | 'color' | 'options' | 'textLabel'
>

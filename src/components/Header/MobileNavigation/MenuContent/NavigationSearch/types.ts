// Interfaces
import { InputTextProps } from '@components/InputText/interfaces'

export type SeekerProps = Omit<
  InputTextProps,
  | 'icon'
  | 'placeholder'
  | 'className'
  | 'innerClassName'
  | 'containerClassName'
  | 'hidePlaceholderOnFocus'
>

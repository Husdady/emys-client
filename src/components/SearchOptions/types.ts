// Interfaces
import { InputTextProps } from '@components/InputText/interfaces'

export type SearchOptionsProps = Pick<
  InputTextProps,
  'value' | 'onClear' | 'onChange' | 'isShowingClearIcon' | 'placeholder'
>

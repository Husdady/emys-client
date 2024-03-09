// Types
import type { CustomTextAreaProps } from './types'
import type { DivType, TextAreaType } from '@config/globalTypes'

// Interfaces
import type { FormError, FormLabel } from '@config/globalInterfaces'

export interface TextAreaProps
  extends Pick<TextAreaType, 'rows' | 'value' | 'onChange' | 'placeholder' | 'className' | 'style'>,
    FormError,
    FormLabel {
  resize?: boolean
  containerStyle?: React.CSSProperties
  containerClassName?: DivType['className']
  customTextArea?: CustomTextAreaProps
  hidePlaceholderOnFocus?: boolean
}

// Global types
import type { TextAreaType } from '@config/globalTypes'

// Interfaces
import { TextAreaTypeRef } from '@config/globalInterfaces'

// Types
export type CustomTextAreaProps = TextAreaTypeRef &
  Omit<TextAreaType, 'type' | 'style' | 'className' | 'placeholder'>

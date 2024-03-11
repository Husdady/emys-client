// Global types
import type { TextAreaType } from '@config/types'

// Interfaces
import { TextAreaTypeRef } from '@config/interfaces'

// Types
export type CustomTextAreaProps = TextAreaTypeRef &
  Omit<TextAreaType, 'type' | 'style' | 'className' | 'placeholder'>

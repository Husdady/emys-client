// Global types
import type { TextAreaType } from '@config/global-types'

// Interfaces
import { TextAreaTypeRef } from '@config/global-interfaces'

// Types
export type CustomTextAreaProps = TextAreaTypeRef &
  Omit<TextAreaType, 'type' | 'style' | 'className' | 'placeholder'>

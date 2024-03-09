// Types
import type { UseFormSetError } from 'react-hook-form'

// Interfaces
import { ContactFormState } from '@modules/Contact/components/ContactForm/interfaces'

export interface GlobalParams {
  signOut: () => void
  setError?: UseFormSetError<ContactFormState>
}

export interface SendMessageParams extends GlobalParams {
  data: ContactFormState
}

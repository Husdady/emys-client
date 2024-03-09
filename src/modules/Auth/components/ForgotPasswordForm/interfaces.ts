// Interfaces
import { OnlyMessageProp } from '@config/globalInterfaces'

export interface ForgotPasswordFormState {
  email: string
}

export interface Verification extends ForgotPasswordFormState {
  isSended: boolean
}

export interface VerificationSendedProps extends OnlyMessageProp {
  isLoading: boolean
  sendAgainVerification: () => Promise<void>
}

// Types
import type { UseFormSetError } from 'react-hook-form'

// Interfaces
import { LoginFormState } from '@modules/Auth/components/LoginForm/interfaces'
import { RegisterFormState } from '@modules/Auth/components/RegisterForm/interfaces'
import { ForgotEmailFormState } from '@modules/Auth/components/ForgotEmailForm/interfaces'
import { ForgotPasswordFormState } from '@modules/Auth/components/ForgotPasswordForm/interfaces'
import { ResetPasswordFormState } from '@modules/Auth/components/ResetPasswordForm/interfaces'

export interface LoginParams {
  data: Omit<LoginFormState, 'remember'>
  setError: UseFormSetError<LoginFormState>
}

export interface RegisterUserParams {
  data: Omit<RegisterFormState, 'confirmPassword'>
  setError: UseFormSetError<RegisterFormState>
}

export interface ForgotEmailParams {
  data: ForgotEmailFormState
  setError?: UseFormSetError<ForgotEmailFormState>
}

export interface ForgotPasswordParams {
  data: ForgotPasswordFormState
  setError?: UseFormSetError<ForgotPasswordFormState>
}

export interface ResetPasswordParams {
  token: string
  data: ResetPasswordFormState
  setError: UseFormSetError<ResetPasswordFormState>
}

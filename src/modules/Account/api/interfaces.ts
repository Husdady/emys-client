// Types
import type { UseFormSetError } from 'react-hook-form'

// Interfaces
import { UpdateUbigeoFormState } from '@modules/Account/components/UpdateUbigeo/interfaces'
import { UpdatePasswordFormState } from '@modules/Account/components/UpdatePassword/interfaces'
import { UpdateInformationFormState } from '@modules/Account/components/UpdateInformation/interfaces'
import { ConfirmFormState } from '@modules/Account/components/DeleteAccount/UserConsent/ConfirmForm/hooks/useConfirmForm'

export interface GenerateKeyParams {
  signOut: () => void
}

export interface UpdatePasswordParams {
  signOut: () => void
  data: UpdatePasswordFormState
  setError: UseFormSetError<UpdatePasswordFormState>
}

export interface UpdateInformationParams {
  data: FormData
  setError: UseFormSetError<UpdateUbigeoFormState> | UseFormSetError<UpdateInformationFormState>
  signOut: () => void
}

export interface UpdateProfilePhotoParams {
  data: FormData
  signOut: () => void
}

export interface AuthorizeCloseAccountParams {
  data: Omit<ConfirmFormState, 'remember'>
  setError: UseFormSetError<ConfirmFormState>
}

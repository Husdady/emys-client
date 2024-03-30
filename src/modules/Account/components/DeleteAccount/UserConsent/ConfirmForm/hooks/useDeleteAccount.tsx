/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { showFloatErrorMessage } from '@libs/antd/message'
import { saveTokenOnAxios, removeTokenFromAxios } from '@libs/axios'

// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import useModal from '@config/store/states/modal/useModal'
import useDisableButtonInModalForm from '@hooks/useDisableButtonInModalForm'
import { useDeleteAccountMutation } from '@modules/Account/api/closeAccount'
import { useCallback } from 'react'

// Types
import type { FieldErrorsImpl } from 'react-hook-form'

// Interfaces
import { ConfirmFormState } from './useConfirmForm'

export const ERROR_DELETING_ACCOUNT = 'Ah ocurrido un error al eliminar tu cuenta'

/**
 * Hook that implements delete account functionality
 * @return {DeleteAccountFormResponse} React hook form options
 */
export default function useDeleteAccount(
  errors: FieldErrorsImpl<ConfirmFormState>
): () => Promise<void> {
  const auth = useAuth()
  const { mutate, hideModal } = useModal()
  const [deleteAccount] = useDeleteAccountMutation()

  // Delete user account
  const handleDeleteAccount = useCallback(async () => {
    if (auth.token === null) return

    // Show Spin
    mutate({
      'acceptButtonProps.isShowingSpin': true,
      'acceptButtonProps.loadingTitle': 'Eliminando cuenta...'
    })

    // Make request to the API for delete account
    const payload = await deleteAccount(null)

    hideModal() // Hide modal
    mutate({ 'acceptButtonProps.isShowingSpin': false }) // Hide Spin

    if ('error' in payload) {
      saveTokenOnAxios(auth.token) // Rollback access token
      return showFloatErrorMessage(ERROR_DELETING_ACCOUNT) // Show error message
    }

    auth.signOut() // Close session
    removeTokenFromAxios() // Remove bearer token
  }, [auth.token])

  // Listener for disable modal buttons
  useDisableButtonInModalForm<ConfirmFormState>(errors)

  return handleDeleteAccount
}

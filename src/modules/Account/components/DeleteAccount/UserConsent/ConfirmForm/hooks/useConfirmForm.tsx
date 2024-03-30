/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { saveTokenOnAxios } from '@libs/axios'

// Components
import Trash from '@components/Icons/Trash'
import ModalContent from '@modules/Account/components/DeleteAccount/UserConsent/ConfirmForm/ModalContent'

// Hooks
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthorizeCloseAccountMutation } from '@modules/Account/api/closeAccount'
import useDeleteAccount from './useDeleteAccount'
import useModal from '@config/store/states/modal/useModal'

// Utils
import isString from '@utils/isString'
import isUndefined from '@utils/isUndefined'
import isEmptyString from '@utils/isEmptyString'

export interface ConfirmFormState {
  password: string
  secretMessage: string
}

/**
 * Hook that implements the logic for the ConfirmForm component
 */
export default function useConfirmForm() {
  const { mutate, showModal, hideModal } = useModal()
  const [authorize] = useAuthorizeCloseAccountMutation()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<ConfirmFormState>({
    defaultValues: {
      password: '',
      secretMessage: ''
    }
  })

  const deleteUserAccount = useDeleteAccount(errors)

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(async (formState: ConfirmFormState) => {
    // Show Spin
    mutate({
      'acceptButtonProps.isShowingSpin': true,
      'acceptButtonProps.loadingTitle': 'Verificando...'
    })

    // Authorize account deletion
    const payload = await authorize({
      data: formState,
      setError: setError
    })

    mutate({ 'acceptButtonProps.isShowingSpin': false }) // Hide function

    if ('error' in payload) return // Stop function
    if (isUndefined(payload.data.result)) return // Stop function

    const token = payload?.data?.result?.access_token // Get access topken
    if (!isString(token) || isEmptyString(token)) return // Stop function

    hideModal() // Hide modal when the authorization is enabled
    saveTokenOnAxios(token) // Save bearer token on Axios

    // Show confirmation modal
    showModal({
      width: 500,
      onAccept: deleteUserAccount,
      icon: <Trash size="md" />,
      content: <ModalContent />,
      title: '¿Estás seguro que deseas eliminar tu cuenta?',
      acceptButtonProps: {
        icon: <Trash />,
        title: 'Si, deseo eliminar mi cuenta'
      }
    })
  }, [])

  return {
    errors: errors,
    submit: submit,
    register: register,
    handleSubmit: handleSubmit
  }
}

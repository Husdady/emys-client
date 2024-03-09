// Librarys
import { useCallback } from 'react'

// Components
import AlertTriangle from '@components/Icons/AlertTriangle'
import ArrowUpCircle from '@components/Icons/ArrowUpCircle'
import UserConsent from '@modules/Account/components/DeleteAccount/UserConsent'

// Hooks
import useModal from '@hooks/useModal'

// Constants
import { DELETE_ACCOUNT_FORM_ID } from '@modules/Account/components/DeleteAccount/UserConsent/ConfirmForm'

/**
 * Hook for implements the logic of the DeleteButton component
 */
export default function useDeleteButton() {
  const { showModal } = useModal()

  // Event click on button for start proccess for delete user account
  const handleGetUserConsent = useCallback(() => {
    showModal({
      width: 500,
      icon: <AlertTriangle />,
      title: 'Proceso de eliminación de cuenta',
      content: <UserConsent />,
      acceptButtonProps: {
        type: 'submit',
        title: 'Continuar',
        className: 'flex-row-reverse gap-x-4',
        icon: <ArrowUpCircle className="rotate-90" />,
        form: DELETE_ACCOUNT_FORM_ID
      }
    })
  }, [])

  return {
    handleGetUserConsent: handleGetUserConsent
  }
}

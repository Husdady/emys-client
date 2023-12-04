// Librarys
import dynamic from 'next/dynamic'

// Components
import UserConsent from './UserConsent'
import Power from '@assets/icons/power'
import AlertTriangle from '@assets/icons/alert-triangle'
import ArrowUpCircle from '@assets/icons/arrow-up-circle'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

// Constants
import { DELETE_ACCOUNT_FORM_ID } from '../ConfirmForm'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

export default function DeleteAccountButton() {
  const { showModal } = useModal()

  // Event click on button for create new role
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

  return (
    <Button
      title="Eliminar mi cuenta"
      titlePopup="Cerrar mi cuenta"
      className="!py-3 !px-4 ml-auto bg-red-600 hover:bg-rose-500 dark:hover:bg-rose-700 dark:bg-red-800 text-white rounded-xl"
      icon={<Power size="sm" className="stroke-3" />}
      onClick={handleGetUserConsent}
    />
  )
}

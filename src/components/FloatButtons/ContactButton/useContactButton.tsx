// Components
import HeadPhones from '@components/Icons/HeadPhones'
import ContactForm from '@modules/Contact/components/ContactForm'

// Hooks
import useModal from '@config/store/states/modal/useModal'
import { useMemo, useCallback } from 'react'
import { usePathname } from 'next/navigation'

// Constants
import { CONTACT_PATH } from '@data/paths'

/**
 * Hook that implements the logic of the ContactButton component
 */
export default function useContactButton() {
  const pathname = usePathname()
  const { showModal } = useModal()

  // Define flag for check if the current page is 'Contact'
  const isContactPage = useMemo(() => pathname === CONTACT_PATH, [pathname])

  // Event click on button for show a modal of the Contact form
  const show = useCallback(() => {
    showModal({
      width: 500,
      content: <ContactForm />,
      isShowingAcceptButton: false,
      title: 'Formulario de contacto',
      className: 'modal-contact-form',
      icon: <HeadPhones size="md" />,
      cancelButtonProps: {
        title: 'Ocultar modal',
        titlePopup: 'Ocultar modal'
      }
    })
  }, [])

  return {
    show: show,
    isContactPage: isContactPage
  }
}

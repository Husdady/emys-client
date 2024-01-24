// Components
import HeadPhones from '@assets/icons/headphones'
import ContactForm from '@modules/Contact/components/ContactForm'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

/**
 * Hook that show Contact form modal
 */
export default function useShowContactFormModal() {
  const { showModal } = useModal()

  // Event click on button for show modal the Contact form
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

  return show
}

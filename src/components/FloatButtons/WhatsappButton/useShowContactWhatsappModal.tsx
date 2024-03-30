// Components
import ModalContent from './ModalContent'
import BrandWhatsapp from '@components/Icons/BrandWhatsapp'

// Hooks
import { useCallback } from 'react'
import useModal from '@config/store/states/modal/useModal'

/**
 * Hook that show Whatsapp contact modal
 */
export default function useShowContactWhatsappModal() {
  const { showModal } = useModal()

  // Event click on button for show modal the Whatsapp contact
  const show = useCallback(() => {
    showModal({
      width: 500,
      content: <ModalContent />,
      isShowingAcceptButton: false,
      title: 'Números para contactar por Whatsapp',
      className: 'modal-whatsapp-contact',
      icon: <BrandWhatsapp size="md" />,
      cancelButtonProps: {
        title: 'Ocultar modal',
        titlePopup: 'Ocultar modal'
      }
    })
  }, [])

  return show
}

// Components
import Testimony from './Testimony'

// Hooks
import { useCallback } from 'react'
import useModal from '@root/src/config/store/states/modal/useModal'

// Interfaces
import { Testimony as TestimonyData } from '@modules/Testimonials/api/interfaces'

/**
 * Hook for show a Modal for read a Author Testimony
 * @param {TestimonyData} props Receive a Testimony data
 * @returns {() => void} Callback
 */
export default function useShowModalForReadTestimony(props: TestimonyData): () => void {
  const { showModal } = useModal()

  // Callback for show a modal for read the Author's testimony
  const show = useCallback(() => {
    showModal({
      width: 500,
      icon: null,
      className: 'testimony-modal',
      isShowingAcceptButton: false,
      content: <Testimony {...props} />,
      title: 'Acerca de este Testimonio Omnilife',
      cancelButtonProps: {
        title: 'Ocultar modal',
        titlePopup: 'Ocultar modal'
      }
    })
  }, [props])

  return show
}

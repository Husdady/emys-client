// Components
import Eye from '@assets/icons/eye'
import AboutSeytuCompany from './modals/AboutSeytuCompany'
import AboutSeytuProducts from './modals/AboutSeytuProducts'
import AboutSeytuParabens from './modals/AboutSeytuParabens'

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import useModal from '@hooks/useModal'

// Utils
import isFunction from '@utils/isFunction'

// Constants
import { PRODUCTS_PATH } from '@assets/data/paths'
import { CARD_01_ID, CARD_02_ID, CARD_03_ID } from './card-list'
import sharedShowModalProps from '@modules/Home/data/shared-show-modal-props'

/**
 * Hook for manage the logic of the SeytuCards component
 */
export default function useSeytuCards() {
  const router = useRouter()
  const { showModal } = useModal()

  // Callback for go to the Products page
  const goToProductsPage = useCallback(() => {
    router.push(PRODUCTS_PATH)
  }, [])

  // Callback for show the About Seytu Company modal
  const showAboutSeytuCompanyModal = useCallback(() => {
    showModal({
      ...sharedShowModalProps,
      title: 'Acerca de Seytú',
      content: <AboutSeytuCompany />,
      centered: true
    })
  }, [])

  // Callback for show the About Seytu Parabens modal
  const showAboutSeytuParabensModal = useCallback(() => {
    showModal({
      ...sharedShowModalProps,
      title: 'Libre de Parabenos',
      content: <AboutSeytuParabens />
    })
  }, [])

  // Callback for show the About Seytu Products modal
  const showAboutSeytuProductsModal = useCallback(() => {
    showModal({
      ...sharedShowModalProps,
      isShowingAcceptButton: true,
      title: 'Sobre los Produtos Seytu',
      content: <AboutSeytuProducts />,
      acceptButtonProps: {
        title: 'Ver productos',
        icon: <Eye size="smd" />,
        onClick: goToProductsPage
      }
    })
  }, [])

  // Callback for create card action
  const createCardAction = useCallback((cardId: string) => {
    // Define the actions
    const actions = {
      [CARD_01_ID]: showAboutSeytuCompanyModal,
      [CARD_02_ID]: showAboutSeytuProductsModal,
      [CARD_03_ID]: showAboutSeytuParabensModal
    }

    // Get action by the card id
    const action = actions[cardId]
    if (!isFunction(action)) return // Validates 'action'

    return action
  }, [])

  return {
    createCardAction: createCardAction
  }
}

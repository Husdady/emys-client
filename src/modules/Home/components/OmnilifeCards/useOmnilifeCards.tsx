// Components
import Eye from '@components/Icons/Eye'
import AboutOmnilifeCompany from './modals/AboutOmnilifeCompany'
import AboutOmnilifeProducts from './modals/AboutOmnilifeProducts'
import AboutOmnilifeMicellization from './modals/AboutOmnilifeMicellization'

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import useModal from '@config/store/states/modal/useModal'

// Utils
import isFunction from '@utils/isFunction'

// Constants
import { PRODUCTS_PATH } from '@data/paths'
import { CARD_01_ID, CARD_02_ID, CARD_03_ID } from './cardList'
import sharedShowModalProps from '@modules/Home/data/sharedShowModalProps'

/**
 * Hook for manage the logic of the OmnilifeCards component
 */
export default function useOmnilifeCards() {
  const router = useRouter()
  const { showModal } = useModal()

  // Callback for go to the Products page
  const goToProductsPage = useCallback(() => {
    router.push(PRODUCTS_PATH)
  }, [])

  // Callback for show the About Omnilife Company modal
  const showAboutOmnilifeCompanyModal = useCallback(() => {
    showModal({
      ...sharedShowModalProps,
      title: 'Historia de Omnilife',
      content: <AboutOmnilifeCompany />
    })
  }, [])

  // Callback for show the About Omnilife Micellization modal
  const showAboutOmnilifeMicellizationModal = useCallback(() => {
    showModal({
      ...sharedShowModalProps,
      title: 'El proceso de Micelización',
      content: <AboutOmnilifeMicellization />
    })
  }, [])

  // Callback for show the About Omnilife Products modal
  const showAboutOmnilifeProductsModal = useCallback(() => {
    showModal({
      ...sharedShowModalProps,
      centered: true,
      isShowingAcceptButton: true,
      title: 'Sobre los Produtos Omnilife',
      content: <AboutOmnilifeProducts />,
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
      [CARD_01_ID]: showAboutOmnilifeCompanyModal,
      [CARD_03_ID]: showAboutOmnilifeProductsModal,
      [CARD_02_ID]: showAboutOmnilifeMicellizationModal
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

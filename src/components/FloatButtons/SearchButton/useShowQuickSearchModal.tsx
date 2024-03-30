// Components
import MagnifyingGlass from '@components/Icons/MagnifyingGlass'
import NavigationSearch from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationSearch'

// Hooks
import { useCallback } from 'react'
import useModal from '@root/src/config/store/states/modal/useModal'

/**
 * Hook that show quick search modal
 */
export default function useShowQuickSearchModal() {
  const { showModal } = useModal()

  // Event click on button for show modal for create new action
  const show = useCallback(() => {
    showModal({
      width: 500,
      title: 'Búsqueda rápida',
      isShowingAcceptButton: false,
      icon: <MagnifyingGlass size="sm" />,
      wrapClassName: 'modal-quickly-search',
      cancelButtonProps: {
        title: 'Ocultar modal',
        titlePopup: 'Ocultar modal'
      },
      content: (
        <NavigationSearch
          isShowingResults
          containerClassName="!px-0"
          searchPlaceholder="Por ejemplo: Contacto..."
          seekerTextLabel="Búsqueda de enlaces de navegación"
          hideResultsWhenSearchIsEmpty={false}
        />
      )
    })
  }, [])

  return show
}

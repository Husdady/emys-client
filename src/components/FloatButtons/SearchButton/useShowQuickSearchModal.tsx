// Components
import MagnifyingGlass from '@assets/icons/magnifying-glass'
import NavigationSearch from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationSearch'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

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
          containerClassName="!px-0"
          searchPlaceholder="Por ejemplo: Contacto..."
          seekerTextLabel="Búsqueda de elementos de navegación"
        />
      )
    })
  }, [])

  return show
}

// Components
import Sliders from '@components/Icons/Sliders'
import MoodDollar from '@components/Icons/MoodDollar'
import SellersFilters, { SELLERS_FILTERS_FORM_ID } from '@modules/Sellers/components/SellersFilters'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

/**
 * Hook for implements the logic of the ButtonShowFilters component
 */
export default function useButtonShowFilters() {
  const { showModal } = useModal()

  // Event click on button for show a modal of the Sellers filters
  const show = useCallback(() => {
    showModal({
      width: 700,
      icon: <MoodDollar />,
      content: <SellersFilters />,
      title: 'Filtrar Vendedores',
      className: 'modal-sellers-filters',
      acceptButtonProps: {
        type: 'submit',
        title: 'Aplicar filtros',
        icon: <Sliders size="sm" />,
        form: SELLERS_FILTERS_FORM_ID
      }
    })
  }, [])

  return {
    show: show
  }
}

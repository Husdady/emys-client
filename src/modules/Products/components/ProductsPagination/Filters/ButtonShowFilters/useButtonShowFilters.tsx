// Components
import Sliders from '@components/Icons/Sliders'
import BoxSeam from '@components/Icons/BoxSeam'
import ProductsFilters from '@modules/Products/components/ProductsFilters'

// Hooks
import { useCallback } from 'react'
import useModal from '@root/src/config/store/states/modal/useModal'

// Constants
import { PRODUCTS_FILTERS_FORM_ID } from '@modules/Products/components/ProductsFilters/constants'

/**
 * Hook for implements the logic of the ButtonShowFilters component
 */
export default function useButtonShowFilters() {
  const { showModal } = useModal()

  // Event click on button for show a modal of the Products filters
  const show = useCallback(() => {
    showModal({
      width: 575,
      icon: <BoxSeam />,
      content: <ProductsFilters />,
      title: 'Filtrar Productos',
      wrapClassName: 'wrap-modal-filters',
      className: 'modal-filters modal-products-filters',
      acceptButtonProps: {
        type: 'submit',
        title: 'Aplicar filtros',
        icon: <Sliders size="sm" />,
        form: PRODUCTS_FILTERS_FORM_ID
      }
    })
  }, [])

  return {
    show: show
  }
}

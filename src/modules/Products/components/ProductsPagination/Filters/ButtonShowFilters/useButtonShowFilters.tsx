// Components
import Sliders from '@assets/icons/sliders'
import BoxSeam from '@assets/icons/box-seam'
import ProductsFilters, { PRODUCTS_FILTERS_FORM_ID } from '@modules/Products/components/ProductsFilters'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

/**
 * Hook for implements the logic of the ButtonShowFilters component
 */
export default function useButtonShowFilters() {
  const { showModal } = useModal()

  // Event click on button for show a modal of the Products filters
  const show = useCallback(() => {
    showModal({
      width: 700,
      icon: <BoxSeam />,
      content: <ProductsFilters />,
      title: 'Filtrar Productos',
      className: 'modal-products-filters',
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

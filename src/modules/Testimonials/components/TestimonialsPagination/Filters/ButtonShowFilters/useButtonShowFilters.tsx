// Components
import Sliders from '@components/Icons/Sliders'
import ReportMedical from '@components/Icons/ReportMedical'
import TestimonialsFilters from '@modules/Testimonials/components/TestimonialsFilters'

// Hooks
import { useCallback } from 'react'
import useModal from '@config/store/states/modal/useModal'

// Constants
import { TESTIMONIALS_FILTERS_FORM_ID } from '@modules/Testimonials/components/TestimonialsFilters/constants'

/**
 * Hook for implements the logic of the ButtonShowFilters component
 */
export default function useButtonShowFilters() {
  const { showModal } = useModal()

  // Event click on button for show a modal of the Testimonials filters
  const show = useCallback(() => {
    showModal({
      width: 540,
      icon: <ReportMedical />,
      content: <TestimonialsFilters />,
      title: 'Filtrar Testimonios',
      wrapClassName: 'wrap-modal-filters',
      className: 'modal-filters modal-testimonials-filters',
      acceptButtonProps: {
        type: 'submit',
        title: 'Aplicar filtros',
        icon: <Sliders size="sm" />,
        form: TESTIMONIALS_FILTERS_FORM_ID
      }
    })
  }, [])

  return {
    show: show
  }
}

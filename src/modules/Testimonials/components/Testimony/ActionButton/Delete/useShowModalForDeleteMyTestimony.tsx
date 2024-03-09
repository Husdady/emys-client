/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Trash from '@components/Icons/Trash'
import ReportMedical from '@components/Icons/ReportMedical'
import ContentDeleteModal from './ContentDeleteModal'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'
import useDeleteTestimony from './useDeleteMyTestimony'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

/**
 * Hook that show a modal for delete a testimony
 * @param {Testimony} testimony Testimony
 */
export default function useShowModalForDeleteTestimony(testimony: Testimony) {
  const { showModal } = useModal()
  const submit = useDeleteTestimony(testimony)

  // Callback for show modal for delete a testimony
  const show = useCallback(() => {
    showModal({
      width: 600,
      onAccept: submit,
      icon: <ReportMedical />,
      content: <ContentDeleteModal />,
      title: '¿Estás seguro que deseas eliminar tu testimonio?',
      acceptButtonProps: {
        icon: <Trash size="sm" />,
        title: 'Eliminar mi Testimonio'
      }
    })
  }, [])

  return show
}

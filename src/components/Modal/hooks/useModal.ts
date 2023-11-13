// Librarys
import { useCallback } from 'react'

// Hooks
import useModalContext from '@hooks/useModal'

/**
 * Hook for implements the logic of the Modal component
 */
export default function useModal() {
  const { onAccept, onCancel, onCloseModal, hideModal, ...modal } = useModalContext()

  // Callback for close the modal
  const handleClose = useCallback(() => {
    onCloseModal?.()
    hideModal()
  }, [onCloseModal])

  // Event 'click' in 'Cancel' button
  const handleCancel = useCallback(() => {
    onCancel?.()
    hideModal()
  }, [onCancel])

  return {
    ...modal,
    onAccept: onAccept,
    handleClose: handleClose,
    handleCancel: handleCancel
  }
}

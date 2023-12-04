// Librarys
import { useMemo, useCallback } from 'react'

// Hooks
import useModalContext from '@hooks/useModal'

/**
 * Hook for implements the logic of the Modal component
 */
export default function useModal() {
  const { onAccept, onCancel, onCloseModal, hideModal, ...modal } = useModalContext()

  // Define 'getContainer' prop
  const getContainer = useMemo(() => window.innerWidth <= 900 ? '#root' : undefined, [])  

  // Callback for close the modal
  const handleClose = useCallback(() => {
    onCloseModal?.()
    hideModal()
  }, [hideModal, onCloseModal])

  // Event 'click' in 'Cancel' button
  const handleCancel = useCallback(() => {
    onCancel?.()
    hideModal()
  }, [onCancel, hideModal])

  return {
    ...modal,
    onAccept: onAccept,
    handleClose: handleClose,
    handleCancel: handleCancel,
    getContainer: getContainer
  }
}

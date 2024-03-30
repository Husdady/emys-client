// Hooks
import { useMemo } from 'react'
import { useSelector, useDispatch } from '@hooks/useRedux'

// Actions
import { modalActions } from '@config/store/states/modal'

// Interfaces
import { ModalContext } from '@config/store/states/modal/interfaces'

// Types
import type { ModalPayload } from '@config/store/states/modal/types'

/**
 * Hook that returns 'props' to use in the 'Modal' component and 2 functions to show or hide the component
 * @return {ModalContext}
 */
export default function useModal(): ModalContext {
  const dispatch = useDispatch() // Get dispatch
  const modal = useSelector((state) => state.modal) // Get modal state

  // Get context actions
  const actions = useMemo(
    () => ({
      // Hide modal
      hideModal: () => dispatch(modalActions.hideModal()),

      // Show modal
      showModal: function (payload: ModalPayload) {
        dispatch(modalActions.showModal(payload))
      },

      // Mutate modal state
      mutate: function (payload: Record<string, unknown>) {
        dispatch(modalActions.mutate(payload))
      }
    }),
    []
  )

  return {
    ...modal,
    ...actions
  }
}

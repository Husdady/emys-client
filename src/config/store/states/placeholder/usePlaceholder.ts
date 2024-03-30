// Hooks
import { useMemo } from 'react'
import { useSelector, useDispatch } from '@hooks/useRedux'

// Actions
import { placeholderActions } from '@config/store/states/placeholder'

// Interfaces
import { PlaceholderContext, UpdatePlaceholderPayload } from '@config/store/states/placeholder/interfaces'

/**
 * Hook for shows and hide a placeholder in a module
 * @returns {PlaceholderContext} Context
 */
export default function usePlaceholder(): PlaceholderContext {
  const dispatch = useDispatch() // Get dispatch
  const placeholder = useSelector((state) => state.placeholder) // Get placeholder state

  // Create context actions
  const actions = useMemo(
    () => ({
      // Update placeholder state
      updatePlaceholder: function (payload: UpdatePlaceholderPayload) {
        dispatch(placeholderActions.updatePlaceholder(payload))
      },
    }),
    []
  )

  return { ...placeholder, ...actions }
}

// Hooks
import { useMemo } from 'react'
import { useSelector, useDispatch } from '@hooks/useRedux'

// Actions
import { filtersActions } from '@config/store/states/filters'

// Interfaces
import { FiltersContext, UpdateCountPayload } from '@config/store/states/filters/interfaces'

/**
 * Hook for shows and hide a filters in a module
 * @returns {FiltersContext} Context
 */
export default function useFilters(): FiltersContext {
  const dispatch = useDispatch() // Get dispatch
  const filters = useSelector((state) => state.filters) // Get filters state

  // Create context actions
  const actions = useMemo(
    () => ({
      // Update count of the filters state
      updateCount: function (payload: UpdateCountPayload) {
        dispatch(filtersActions.updateCount(payload))
      },
    }),
    []
  )

  return { ...filters, ...actions }
}

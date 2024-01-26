// Hooks
import { useCallback } from 'react'
import { useDispatch } from './useRedux'

// Graphql API
import { api } from '@config/store/graphql'

/**
 * Reload Graphql query
 */
export default function useReloadQuery() {
  const dispatch = useDispatch()

  // Callback for reload the query
  const reload = useCallback((payload: string[]) => {
    dispatch({
      payload: payload,
      type: `${api.reducerPath}/invalidateTags`
    })
  }, [])

  return reload
}

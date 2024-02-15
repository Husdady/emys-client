// Hooks
import { useRouter } from 'next/router'
import { useMemo, useCallback } from 'react'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

/**
 * Hook for implements the logic of the ButtonClearFilter components
 */
export default function useButtonClearFilter() {
  const router = useRouter()

  // Check if the url has query params
  const hasQueryParams = useMemo(() => {
    return !isEmptyArray(Object.keys(router.query))
  }, [router])

  // Event click on button for clear the query params on the URL
  const clear = useCallback(() => {
    router.replace(router.pathname) // Remove query params from URL
  }, [router])

  return {
    clear: clear,
    disabled: !hasQueryParams
  }
}

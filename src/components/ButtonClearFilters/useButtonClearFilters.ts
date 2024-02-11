// Hooks
import { useMemo } from 'react'
import { useRouter } from 'next/router'

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

  return {
    disabled: !hasQueryParams
  }
}

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'

/**
 * Hook for implements the logic of the ButtonClearFilters component
 */
export default function useButtonClearFilters() {
  const router = useRouter()

  // Event click on button for clear the query params on the URL
  const clear = useCallback(() => {
    router.replace(router.pathname) // Remove query params from URL
  }, [router])

  return {
    clear: clear
  }
}

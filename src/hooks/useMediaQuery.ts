// Hooks
import useMounted from './useMounted'
import { useState, useCallback } from 'react'

/**
 * Hook for implements Media Query validations
 * @param {string} query Media Query
 * @returns {boolean} Boolean
 */
export function useMediaQuery(query: string): boolean {
  // Callback for get matches
  const getMatches = useCallback((query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }

    return false
  }, [])

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  // Callback for change the matches of the query
  const handleChange = useCallback(() => {
    setMatches(getMatches(query))
  }, [])

  useMounted(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

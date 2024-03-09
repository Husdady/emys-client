// Hooks
import { useState } from 'react'
import useMounted from './useMounted'

/**
 * Hook for make responsive query
 * @param {number} query Query
 * @returns {boolean} Boolean
 */
export default function useResponsiveQuery(query: number): boolean {
  const [matches, setMatches] = useState(false)

  useMounted(() => {
    // Callback for handle the resize event
    const handleResize = () => {
      setMatches(window.innerWidth <= query)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return matches
}

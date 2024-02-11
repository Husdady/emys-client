// Hooks
import useResponsiveQuery from './useResponsiveQuery'

export const LARGE_QUERY = '(min-width: 1280px)'

/**
 * Hook for check if is a large screen
 * @returns {boolean} Boolean
 */
export default function useLargeScreen(): boolean {
  const matches = useResponsiveQuery(LARGE_QUERY)
  return matches
}

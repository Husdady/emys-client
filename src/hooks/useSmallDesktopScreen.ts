// Hooks
import useResponsiveQuery from './useResponsiveQuery'

export const MEDIA_QUERY_FOR_SMALL_DESKTOP_SCREEN = 1200

/**
 * Hook for check if is a small desktop screen
 * @returns {boolean} Boolean
 */
export default function useSmallDesktopScreen(): boolean {
  const isMobileScreen = useResponsiveQuery(MEDIA_QUERY_FOR_SMALL_DESKTOP_SCREEN)
  return isMobileScreen
}

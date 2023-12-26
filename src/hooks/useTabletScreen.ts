// Hooks
import useResponsiveQuery from './useResponsiveQuery'

export const MEDIA_QUERY_FOR_TABLET_SCREEN = 768

/**
 * Hook for check if is a tablet screen
 * @returns {boolean} Boolean
 */
export default function useTabletScreen(): boolean {
  const isMobileScreen = useResponsiveQuery(MEDIA_QUERY_FOR_TABLET_SCREEN)
  return isMobileScreen
}

// Hooks
import useResponsiveQuery from './useResponsiveQuery'

export const MEDIA_QUERY_FOR_BIGGEST_TABLET_SCREEN = 1024

/**
 * Hook for check if is a tablet screen
 * @returns {boolean} Boolean
 */
export default function useBiggestTabletScreen(): boolean {
  const isBiggestTabletScreen = useResponsiveQuery(MEDIA_QUERY_FOR_BIGGEST_TABLET_SCREEN)
  return isBiggestTabletScreen
}

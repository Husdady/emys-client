// Hooks
import useResponsiveQuery from './useResponsiveQuery'

export const MEDIA_QUERY_FOR_MOBILE_DEVICES = 640

/**
 * Hook for check if is mobile device
 * @returns {boolean} Boolean
 */
export default function useMobileScreen(): boolean {
  const isMobileScreen = useResponsiveQuery(MEDIA_QUERY_FOR_MOBILE_DEVICES)
  return isMobileScreen
}

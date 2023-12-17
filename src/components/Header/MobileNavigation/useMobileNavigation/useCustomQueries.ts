// Hooks
import useResponsiveQuery from '@hooks/useResponsiveQuery'

export const MEDIA_QUERY_FOR_XS_DEVICES = 375
export const MEDIA_QUERY_FOR_SMALL_DEVICES = 480

/**
 * Hook for define a custom queries
 */
export default function useCustomQueries() {
  const isXsMobileDevice = useResponsiveQuery(MEDIA_QUERY_FOR_XS_DEVICES)
  const isSmallMobileDevice = useResponsiveQuery(MEDIA_QUERY_FOR_SMALL_DEVICES)

  return {
    isXsMobileDevice: isXsMobileDevice,
    isSmallMobileDevice: isSmallMobileDevice
  }
}

// Hooks
import useResponsiveQuery from '@root/src/hooks/screen/useResponsiveQuery'

const MEDIA_QUERY_FOR_XS_DEVICES = 373
const MEDIA_QUERY_FOR_SMALL_DEVICES = 480

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

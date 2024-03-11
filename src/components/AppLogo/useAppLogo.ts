// Hooks
import { useMemo } from 'react'
import useTheme from '@hooks/useTheme'

// Constants
import { LOGO_IMAGE, LOGO_DARK_IMAGE } from '@data/images'

/**
 * Hook for implements the logic of the AppLogo component
 */
export default function useAppLogo() {
  const { isLightTheme } = useTheme()

  // Define the app logo
  const appLogoSrc = useMemo(() => (isLightTheme ? LOGO_IMAGE : LOGO_DARK_IMAGE), [isLightTheme])

  return {
    appLogoSrc: appLogoSrc,
  }
}

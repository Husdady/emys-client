// Hooks
import { useMemo } from 'react'
import useTheme from '@hooks/useTheme'

// Images
import logo from '@assets/images/logo.webp'
import logoDark from '@assets/images/logo-dark.webp'

/**
 * Hook for implements the logic of the AppLogo component
 */
export default function useAppLogo() {
  const { isLightTheme } = useTheme()

  // Define the app logo
  const appLogoSrc = useMemo(() => (isLightTheme ? logo.src : logoDark.src), [isLightTheme])

  return {
    appLogoSrc: appLogoSrc,
  }
}

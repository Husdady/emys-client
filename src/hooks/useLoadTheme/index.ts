// Hooks
import useTheme from '@hooks/useTheme'
import { useLayoutEffect } from 'react'

// Constants
import isDarkModeOnDevice from './isDarkModeOnDevice'
import { DARK } from '@components/SwitchTheme/constants'

/**
 * Hook thats load the app theme
 * @returns {void} Void
 */
export default function useLoadTheme(): void {
  const { isDarkTheme, isLightTheme } = useTheme() // Get themes

  useLayoutEffect(() => {
    // Its already in light mode, switch to dark mode
    if (isLightTheme) document.documentElement.classList.remove(DARK)
    else if (isDarkTheme || isDarkModeOnDevice()) {
      // Check if is in dark mode or machine have dark mode enabled
      document.documentElement.classList.add(DARK) // Enable dark mode
    }
  }, [isDarkTheme, isLightTheme])
}

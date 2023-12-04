// Hooks
import { useMemo, useCallback } from 'react'
import { useTheme as useNextTheme } from 'next-themes'

// Constants
import { DARK, LIGHT, SYSTEM } from '@components/SwitchTheme/constants'

/**
 * Hook that theme state for change the current theme of the application
 */
export default function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()

  // Define the current theme
  const currentTheme = useMemo(() => (theme === SYSTEM ? systemTheme : theme), [theme, systemTheme])

  // Define the current theme
  const toggleTheme = useCallback(() => {
    // Get the new theme
    const newTheme = theme === DARK ? LIGHT : DARK

    // Set the new theme
    setTheme(newTheme)
  }, [theme])

  return {
    setTheme: setTheme,
    theme: currentTheme,
    toggleTheme: toggleTheme,
    isDarkTheme: theme === DARK,
    isLightTheme: theme === LIGHT
  }
}

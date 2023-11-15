// Hooks
import { useTheme as useNextTheme } from 'next-themes'

// Constants
import { DARK, LIGHT, SYSTEM } from '@components/SwitchTheme/constants'

/**
 * Hook that theme state for change the current theme of the application
 */
export default function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()
  const currentTheme = theme === SYSTEM ? systemTheme : theme

  return {
    setTheme: setTheme,
    theme: currentTheme,
    isDarkTheme: theme === DARK,
    isLightTheme: theme === LIGHT
  }
}

// Hooks
import { useCallback } from 'react'
import useTheme from '@hooks/useTheme'

// Constants
import { DARK, LIGHT } from '@components/SwitchTheme/constants'

/**
 * Hook for implements the logic of the SwitchTheme component
 */
export default function useSwitchTheme() {
  const { setTheme, isLightTheme } = useTheme()

  // Event 'onChange' in Switch component for change current theme
  const handleChangeTheme = useCallback(() => {
    if (isLightTheme) return setTheme(DARK)
    setTheme(LIGHT)
  }, [isLightTheme])

  return {
    handleChangeTheme: handleChangeTheme
  }
}

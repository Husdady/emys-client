// Hooks
import { useMemo } from 'react'
import { useSelector, useDispatch } from './useRedux'

// Actions
import { themeActions } from '@root/src/config/store/states/theme.state'

// Interfaces
import { ThemeContext } from '@components/SwitchTheme/interfaces'

// Types
import type { Theme } from '@components/SwitchTheme/constants'

// Constants
import { DARK, LIGHT } from '@components/SwitchTheme/constants'

/**
 * Hook that theme state for change the current theme of the application
 * @return {ThemeContext}
 */
export default function useTheme(): ThemeContext {
  const dispatch = useDispatch() // Get dispatch
  const theme = useSelector((state) => state.theme) // Get theme state

  // Get context actions
  const actions = useMemo(
    () => ({
      // Switch current theme
      switchTheme: (th: Theme) => dispatch(themeActions.switchTheme(th))
    }),
    []
  )

  return {
    theme: theme,
    isDarkTheme: theme === DARK,
    isLightTheme: theme === LIGHT,
    ...actions
  }
}

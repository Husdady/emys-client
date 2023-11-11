// Types
import type { Theme } from './types'

export interface ThemeContext {
  theme: string
  isDarkTheme: boolean
  isLightTheme: boolean
  switchTheme: (theme: Theme) => void
}

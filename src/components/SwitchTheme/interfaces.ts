// Types
import type { Theme } from './constants'

export interface ThemeContext {
  theme: string
  isDarkTheme: boolean
  isLightTheme: boolean
  switchTheme: (theme: Theme) => void
}

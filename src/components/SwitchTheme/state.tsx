// Librarys
import { createSlice } from '@reduxjs/toolkit'

// Types
import type { Theme } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

// Constants
import darkMatches from '@hooks/useLoadTheme/darkMatches'

// Styles
import './styles.scss'

export const initialState = darkMatches ? 'dark' : 'light'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    // Switch theme by other theme
    switchTheme: (_, action: PayloadAction<Theme>) => {
      return action.payload
    }
  }
})

export const themeActions = themeSlice.actions // Export actions
export default themeSlice.reducer // Export reducer

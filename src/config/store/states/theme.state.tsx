// Librarys
import { createSlice } from '@reduxjs/toolkit'

// Types
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Theme } from '@components/SwitchTheme/constants'

// Constants
import { LIGHT } from '@components/SwitchTheme/constants'

export const initialState = LIGHT

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

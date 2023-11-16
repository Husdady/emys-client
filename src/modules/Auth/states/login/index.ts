// Librarys
import { createSlice } from '@reduxjs/toolkit'

// Types
import type { PayloadAction } from '@reduxjs/toolkit'
import type { LoginState, LoginPayload } from './interfaces'

const initialState: LoginState = {
  user: null,
  remember: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    // Remember credentials
    toggleRemember: (state) => {
      state.remember = !state.remember
      return state
    },

    // Save user's credentials
    saveLoginCredentials: (state, action: PayloadAction<LoginPayload>): LoginState => {
      Object.assign(state, action.payload)
      return state
    }
  }
})

export const loginActions = loginSlice.actions // Export actions
export default loginSlice.reducer // Export reducer

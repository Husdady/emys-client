// Librarys
import { createSlice } from '@reduxjs/toolkit'
import { removeBearerTokenFromAxios } from '@libs/axios'
import { removeBearerTokenFromGraphqlClient } from '@libs/graphql'

// Types
import type { PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { User, AuthState, AuthPayload } from './interfaces'

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // Authenticate user
    authenticate: (state, action: PayloadAction<boolean>): AuthState => {
      state.isAuthenticated = action.payload
      return state
    },

    // Update user information
    updateUser: (state, action: PayloadAction<Partial<User>>): AuthState => {
      if (state.user === null) return state
      Object.assign(state.user, action.payload)
      return state
    },

    // Login at the app
    signIn: (state, action: PayloadAction<AuthPayload>): AuthState => {
      Object.assign(state, action.payload)
      state.isAuthenticated = true
      return state
    },

    // Logout from the app
    signOut: (state) => {
      state.user = initialState.user // Reset user info
      state.token = initialState.token // Remove token
      removeBearerTokenFromAxios() // Remove token from axios
      removeBearerTokenFromGraphqlClient() // Remove token from GraphQL client

      return state
    }
  }
})

export const authActions = authSlice.actions // Export actions
export default authSlice.reducer // Export reducer

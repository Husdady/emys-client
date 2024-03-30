// Librarys
import { combineReducers } from 'redux'

// GraphQL states
import { api as mainAPI } from './api'
import { api as graphqlAPI } from './graphql'

// Global states
import { modalSlice } from './states/modal'
import { filtersSlice } from './states/filters'
import { placeholderSlice } from './states/placeholder'
import { loginSlice } from '@modules/Auth/states/login'
import { authSlice } from '@modules/Auth/states/auth'

const reducers = combineReducers({
  // Main API
  [mainAPI.reducerPath]: mainAPI.reducer,

  // GraphQL API
  [graphqlAPI.reducerPath]: graphqlAPI.reducer,

  // Slices
  [authSlice.name]: authSlice.reducer,
  [loginSlice.name]: loginSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [placeholderSlice.name]: placeholderSlice.reducer
})

export default reducers

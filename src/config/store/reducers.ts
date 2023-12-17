// Librarys
import { combineReducers } from 'redux'

// Auth API states
import { loginApi } from '@modules/Auth/api/login'
import { registerApi } from '@modules/Auth/api/register'
import { forgotEmailApi } from '@modules/Auth/api/forgot-email'
import { forgotPasswordApi } from '@modules/Auth/api/forgot-password'
import { resetPasswordApi } from '@modules/Auth/api/reset-password'

// Authenticated API states
import { verifySessionApi } from '@routes/DashboardRoute/verify-session'

// GraphQL states
import { regionsGraphqlApi } from '@modules/Ubigeo/api/regions/graphql'
import { countriesGraphqlApi } from '@modules/Ubigeo/api/countries/graphql'
import { provincesGraphqlApi } from '@modules/Ubigeo/api/provinces/graphql'
import { districtsGraphqlApi } from '@modules/Ubigeo/api/districts/graphql'

// Global states
import { modalSlice } from './states/modal'
import { authSlice } from '@modules/Auth/states/auth'
import { loginSlice } from '@modules/Auth/states/login'

const reducers = combineReducers({
  // Slices
  [authSlice.name]: authSlice.reducer,
  [loginSlice.name]: loginSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,

  // Auth API
  [loginApi.reducerPath]: loginApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [forgotEmailApi.reducerPath]: forgotEmailApi.reducer,
  [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
  [forgotPasswordApi.reducerPath]: forgotPasswordApi.reducer,

  // Authenticated API
  [verifySessionApi.reducerPath]: verifySessionApi.reducer,

  // GraphQL API
  [regionsGraphqlApi.reducerPath]: regionsGraphqlApi.reducer,
  [countriesGraphqlApi.reducerPath]: countriesGraphqlApi.reducer,
  [provincesGraphqlApi.reducerPath]: provincesGraphqlApi.reducer,
  [districtsGraphqlApi.reducerPath]: districtsGraphqlApi.reducer
})

export default reducers

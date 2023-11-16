// Librarys
import { combineReducers } from 'redux'

// Auth API states
import { loginApi } from '@modules/Auth/api/login'
import { registerApi } from '@modules/Auth/api/register'
import { forgotEmailApi } from '@modules/Auth/api/forgot-email'
import { resetPasswordApi } from '@modules/Auth/api/reset-password'
import { forgotPasswordApi } from '@modules/Auth/api/forgot-password'

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
  [forgotPasswordApi.reducerPath]: forgotPasswordApi.reducer
})

export default reducers

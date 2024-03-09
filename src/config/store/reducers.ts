// Librarys
import { combineReducers } from 'redux'

// Auth API states
import { loginApi } from '@modules/Auth/api/login'
import { registerApi } from '@modules/Auth/api/register'
import { forgotEmailApi } from '@modules/Auth/api/forgotEmail'
import { forgotPasswordApi } from '@modules/Auth/api/forgotPassword'
import { resetPasswordApi } from '@modules/Auth/api/resetPassword'

// Authenticated API states
import { verifySessionApi } from '@routes/SessionRoute/verifySession'

// GraphQL states
import { productApi } from '@modules/Product/api'
import { productsApi } from '@modules/Products/api'
import { sellersGraphqlApi } from '@modules/Sellers/api/graphql'
import { productGraphqlApi } from '@modules/Product/api/graphql'
import { productsGraphqlApi } from '@modules/Products/api/graphql'
import { regionsGraphqlApi } from '@modules/Ubigeo/api/regions/graphql'
import { countriesGraphqlApi } from '@modules/Ubigeo/api/countries/graphql'
import { provincesGraphqlApi } from '@modules/Ubigeo/api/provinces/graphql'
import { districtsGraphqlApi } from '@modules/Ubigeo/api/districts/graphql'
import { testimonialsGraphqlApi } from '@modules/Testimonials/api/graphql'

// Global states
import { modalSlice } from './states/modal'
import { filtersSlice } from './states/filters'
import { authSlice } from '@modules/Auth/states/auth'
import { loginSlice } from '@modules/Auth/states/login'

const reducers = combineReducers({
  // Slices
  [authSlice.name]: authSlice.reducer,
  [loginSlice.name]: loginSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,

  // Auth API
  [loginApi.reducerPath]: loginApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [forgotEmailApi.reducerPath]: forgotEmailApi.reducer,
  [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
  [forgotPasswordApi.reducerPath]: forgotPasswordApi.reducer,

  // Authenticated API
  [productApi.reducerPath]: productApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [verifySessionApi.reducerPath]: verifySessionApi.reducer,

  // GraphQL API
  [sellersGraphqlApi.reducerPath]: sellersGraphqlApi.reducer,
  [productGraphqlApi.reducerPath]: productGraphqlApi.reducer,
  [productsGraphqlApi.reducerPath]: productsGraphqlApi.reducer,
  [regionsGraphqlApi.reducerPath]: regionsGraphqlApi.reducer,
  [countriesGraphqlApi.reducerPath]: countriesGraphqlApi.reducer,
  [provincesGraphqlApi.reducerPath]: provincesGraphqlApi.reducer,
  [districtsGraphqlApi.reducerPath]: districtsGraphqlApi.reducer,
  [testimonialsGraphqlApi.reducerPath]: testimonialsGraphqlApi.reducer
})

export default reducers

// Librarys
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'

// Reducers
import reducers from './reducers'

// API's
import { api } from './api'
import { api as graphqlAPI } from './graphql'

// Environment variables
import { APP_NAME, isDevMode } from '@config/envs'

// Utils
import loadToken from './utils/loadToken'
import createStorage from './utils/createStorage'
import convertEmptySpacesInHyphens from '@utils/convertEmptySpacesInHyphens'

// Constants
import { FILTERS_KEY } from './states/filters'
import { AUTH_KEY } from '@modules/Auth/states/auth'

export const storage = createStorage()
export const REDUX_KEY = 'app-' + convertEmptySpacesInHyphens(APP_NAME ?? '')

export const persistConfig = {
  version: 1,
  key: REDUX_KEY,
  storage: storage,
  whitelist: [AUTH_KEY, FILTERS_KEY]
}

export const persistedReducer = persistReducer(persistConfig, reducers)

// Create store configuration
export const store = configureStore({
  devTools: isDevMode,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false })
      .concat(api.middleware)
      .concat(graphqlAPI.middleware)
  }
})

setupListeners(store.dispatch)

// Create persistor for use on the Persist Gate
export const persistor = persistStore(store, null, () => loadToken(store))

export type AppDispatch = typeof store.dispatch // Create type of dispatch
export type RootState = ReturnType<typeof store.getState> // Create type of global state

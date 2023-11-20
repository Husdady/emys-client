// Librarys
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'
// import { loadBearerTokenOnGraphqlClient } from '@libs/graphql'
// import { loadBearerTokenOnAxios } from '@libs/axios'

// Reducers
import reducers from './reducers'

// API's
import { api } from './api'
// import { api as graphqlAPI } from './graphql'

// Environment variables
import { APP_NAME, isDevMode } from '@config/envs'

// Utils
import createStorage from './utils/createStorage'
import convertEmptySpacesInHyphens from '@utils/convertEmptySpacesInHyphens'

export const REDUX_KEY = 'app-' + convertEmptySpacesInHyphens(APP_NAME ?? '')

// loadBearerTokenOnAxios(REDUX_KEY)
// loadBearerTokenOnGraphqlClient(REDUX_KEY)

export const storage = createStorage()

export const persistConfig = {
  version: 1,
  key: REDUX_KEY,
  storage: storage,
  whitelist: []
}

export const persistedReducer = persistReducer(persistConfig, reducers)

// Create store configuration
export const store = configureStore({
  devTools: isDevMode,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware)
    // .concat(graphqlAPI.middleware)
  }
})

setupListeners(store.dispatch)
export const persistor = persistStore(store) // Create state that persists
export type AppDispatch = typeof store.dispatch // Create type of dispatch
export type RootState = ReturnType<typeof store.getState> // Create type of global state

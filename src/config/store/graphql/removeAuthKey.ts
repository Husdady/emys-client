// Constants
import { REDUX_KEY } from '@config/store'
import { initialState } from '@modules/Auth/states/auth'

/**
 * Hook for remove the Auth key from LocalStorage
 */
export default function removeAuthKey() {
  // Get item from LocalStorage
  const persistDataString = localStorage.getItem(REDUX_KEY)
  if (!persistDataString) return

  // Parse the persist data
  const persistData = JSON.parse(persistDataString)

  // Validates persis data
  if (persistData) {
    const parsedAuth = JSON.parse(persistData.auth)

    if (parsedAuth) {
      parsedAuth.auth = initialState
      persistData.auth = JSON.stringify(parsedAuth)
    }
  }

  // Update Auth state
  localStorage.setItem(REDUX_KEY, JSON.stringify(persistData))
}

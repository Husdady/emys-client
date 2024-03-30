// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import { useCallback } from 'react'
import { useRouter } from 'next/router'

// Constants
import { ACCOUNT_PATH, LOGIN_PATH } from '@data/paths'

/**
 * Hook that implements the Screen component logic
 * @param {UseScreenParams} params Receive some props of Screen component
 */
export default function useScreen() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  // Callback for back to home
  const backToMainPage = useCallback(() => {
    // Define the new page
    const newPage = isAuthenticated ? ACCOUNT_PATH : LOGIN_PATH
    router.replace(newPage)
  }, [isAuthenticated])

  return {
    backToMainPage: backToMainPage
  }
}

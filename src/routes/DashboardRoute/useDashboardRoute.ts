// Hooks
import useAuth from '@hooks/useAuth'
import { useLayoutEffect } from 'react'
import { useVerifySessionMutation } from './verify-session'

/**
 * Hook that implements the logic of Dashboard Route
 * When the user is logged shows the Dashboard, otherwise, show blocked screen
 */
export default function useDashboardRoute() {
  const [verifySession] = useVerifySessionMutation()
  const { token, isAuthenticated, signOut } = useAuth()

  useLayoutEffect(() => {
    void verifySession({ signOut: signOut })
  }, [])

  return {
    token: token,
    isAuthenticated: isAuthenticated
  }
}

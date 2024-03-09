// Hooks
import useAuth from '@hooks/useAuth'
import useNetwork from '@hooks/useNetwork'
import useNprogressDone from '@hooks/useNprogressDone'
import { useVerifySessionMutation } from './verifySession'
import { useLayoutEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * Hook that implements the logic of SessionRoute component
 */
export default function useSessionRoute() {
  useNprogressDone()
  const router = useRouter()
  const isOnline = useNetwork()
  const [verifySession] = useVerifySessionMutation()
  const { token, isAuthenticated, signOut } = useAuth()

  useLayoutEffect(() => {
    void verifySession({ signOut: signOut })
  }, [])

  return {
    token: token,
    router: router,
    isOnline: isOnline,
    isAuthenticated: isAuthenticated
  }
}

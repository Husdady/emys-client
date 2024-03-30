// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import { useCallback } from 'react'
import { useRouter } from 'next/router'

// Constants
import { LOGIN_PATH } from '@data/paths'

/**
 * Hook for implements the logic of the SignOut component
 */
export default function useSignOut() {
  const router = useRouter()
  const { signOut } = useAuth()

  // Callback for redirect to the login path
  const handleSignOut = useCallback(() => {
    signOut()
    router.replace(LOGIN_PATH, undefined, { shallow: true })
  }, [signOut])

  return {
    handleSignOut: handleSignOut
  }
}

// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import useMounted from '@hooks/useMounted'
import useNetwork from '@hooks/useNetwork'
import { useRouter } from 'next/router'

/**
 * Hook for implements the logic of the AuthRoute component
 */
export default function useAuthRoute() {
  const router = useRouter()
  const isOnline = useNetwork()
  const { token, authenticate, isAuthenticated } = useAuth()

  useMounted(() => {
    // Remove the user authentication
    if (token === null && isAuthenticated) {
      authenticate(false)
    }
  }, [])

  return {
    token: token,
    router: router,
    isOnline: isOnline
  }
}

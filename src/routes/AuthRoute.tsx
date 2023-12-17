// Hooks
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'
import { useRouter } from 'next/router'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

// onstants
import { ACCOUNT_PATH } from '@assets/data/paths'

export default function AuthRoute({ children }: OnlyChildrenProp) {
  const router = useRouter()
  const { token, authenticate, isAuthenticated } = useAuth()

  useMounted(() => {
    // Remove the user authentication
    if (token === null && isAuthenticated) {
      authenticate(false)
    }
  }, [])

  // Show auth route
  if (token === null) return <>{children}</>

  // Redirect to Account page if the user is authenticated
  router.replace(ACCOUNT_PATH)
  return null
}

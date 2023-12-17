// Librarys
import dynamic from 'next/dynamic'

// Hooks
import { useRouter } from 'next/router'
import useDashboardRoute from './useDashboardRoute'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

// Constants
import { LOGIN_PATH } from '@assets/data/paths'

// Lazy Routes
const BlockedRoute = dynamic(() => import('@routes/BlockedRoute'))

export default function DashboardRoute({ children }: OnlyChildrenProp) {
  const router = useRouter()
  const { token, isAuthenticated } = useDashboardRoute() // Get token

  // Show Dashboard content
  if (token !== null) {
    return <>{children}</>
  }

  // Redirect to login
  if (token === null && isAuthenticated) {
    router.replace(LOGIN_PATH)
    return null
  }

  // Show blocked route
  return <BlockedRoute />
}

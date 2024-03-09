// Librarys
import dynamic from 'next/dynamic'

// Components
import OfflineView from '@components/OfflineView'

// Hooks
import useSessionRoute from './useSessionRoute'

// Interfaces
import { OnlyChildrenProp } from '@config/globalInterfaces'

// Constants
import { LOGIN_PATH } from '@assets/data/paths'

// Lazy Routes
const BlockedRoute = dynamic(() => import('@routes/BlockedRoute'))

export default function SessionRoute({ children }: OnlyChildrenProp) {
  const { token, router, isOnline, isAuthenticated } = useSessionRoute()

  // Show Offline View
  if (!isOnline) {
    return <OfflineView />
  }

  // Show Session content
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

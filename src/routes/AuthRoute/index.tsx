// Components
import OfflineView from '@components/OfflineView'

// Hooks
import useAuthRoute from './useAuthRoute'

// Interfaces
import { OnlyChildrenProp } from '@config/interfaces'

// onstants
import { ACCOUNT_PATH } from '@data/paths'

export default function AuthRoute({ children }: OnlyChildrenProp) {
  const { token, router, isOnline } = useAuthRoute()

  // Show Offline View
  if (!isOnline) {
    return <OfflineView />
  }

  // Show auth route
  if (token === null) {
    return <div>{children}</div>
  }

  // Redirect to Account page if the user is authenticated
  router.replace(ACCOUNT_PATH)
  return null
}

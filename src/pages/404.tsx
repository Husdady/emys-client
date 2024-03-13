// Components
import OfflineView from '@components/OfflineView'

// Hooks
import useNetwork from '@hooks/useNetwork'

// Routes
import MissingRoute from '@routes/MissingRoute'

export default function PageNotFound() {
  const isOnline = useNetwork()

  if (!isOnline) {
    return <OfflineView />
  }

  return <MissingRoute />
}

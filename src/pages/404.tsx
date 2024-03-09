// Components
import OfflineView from '@components/OfflineView'

// Hooks
import useNetwork from '@hooks/useNetwork'
import useNprogressDone from '@hooks/useNprogressDone'

// Routes
import MissingRoute from '@routes/MissingRoute'

export default function PageNotFound() {
  useNprogressDone()
  const isOnline = useNetwork()

  if (!isOnline) {
    return <OfflineView />
  }

  return <MissingRoute />
}

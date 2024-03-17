// Components
import OfflineView from '@components/OfflineView'
import Metadata from '@modules/PageNotFound/components/Metadata'
import MissingRoute from '@modules/PageNotFound/components/MissingPage'

// Hooks
import useNetwork from '@hooks/useNetwork'

export default function PageNotFound() {
  const isOnline = useNetwork()

  return (
    <div>
      <Metadata />
      {isOnline ? <MissingRoute /> : <OfflineView />}
    </div>
  )
}

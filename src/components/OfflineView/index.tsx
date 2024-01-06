// Components
import Screen from '@components/Screen'

// Constants
import * as constants from './constants'

export default function OfflineView() {
  return (
    <Screen
      className="offline-view"
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
      customDescription={constants.DEFAULT_CUSTOM_DESCRIPTION}
    />
  )
}

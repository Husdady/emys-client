// Components
import Screen from '@components/Screen'

// Constants
import * as constants from './constants'

export default function BlockedRoute() {
  return (
    <Screen
      showButton
      className="pb-[1.25rem]"
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      button={constants.DEFAULT_BUTTON}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
    />
  )
}

// Components
import Screen from '@components/Screen'

// Constants
import * as constants from './constants'

export default function Error() {
  return (
    <Screen
      className="pb-0 !bg-transparent"
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      button={constants.DEFAULT_BUTTON}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
    />
  )
}

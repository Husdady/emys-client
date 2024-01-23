// Components
import Screen from '@components/Screen'

// Constants
import * as constants from './constants'

export default function Error() {
  return (
    <Screen
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      button={constants.DEFAULT_BUTTON}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
      customDescription={constants.DEFAULT_CUSTOM_DESCRIPTION}
      className="pb-6 pt-[3rem] !bg-transparent min-h-[300px]"
    />
  )
}

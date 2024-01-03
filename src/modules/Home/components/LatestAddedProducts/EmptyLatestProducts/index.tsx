// Components
import Screen from '@components/Screen'

// Constants
import * as constants from './constants'

export default function EmptyLatestProducts() {
  return (
    <Screen
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
      className="pt-5 !px-0 !pb-0 !bg-transparent"
    />
  )
}

// Components
import Screen from '@components/Screen'

// Constants
import * as constants from './constants'

export default function EmptyLatestProducts() {
  return (
    <Screen
      className="pt-5 !pb-0 !bg-transparent"
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
    />
  )
}

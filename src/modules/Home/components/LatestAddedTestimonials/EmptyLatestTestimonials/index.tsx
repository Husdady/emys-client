// Components
import Screen from '@components/Screen'

// Constants
import * as constants from './constants'

export default function EmptyLatestSellers() {
  return (
    <Screen
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
      className="!px-0 py-6 !bg-transparent min-h-[400px]"
    />
  )
}

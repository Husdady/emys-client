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
      className="py-[5rem] min-h-[650px]"
    />
  )
}

// Librarys
import dynamic from 'next/dynamic'

// Constants
import * as constants from './constants'

// Dynamic Components
const Screen = dynamic(() => import('@components/Screen'))

export default function MissingRoute() {
  return (
    <Screen
      showButton
      image={constants.DEFAULT_IMAGE}
      title={constants.DEFAULT_TITLE}
      button={constants.DEFAULT_BUTTON}
      description={constants.DEFAULT_DESCRIPTION}
      customTitle={constants.DEFAULT_CUSTOM_TITLE}
      className="!px-5 py-[1.5rem] missing-route"
    />
  )
}

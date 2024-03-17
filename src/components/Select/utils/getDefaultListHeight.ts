// Constants
import {
  VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE,
  VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP
} from '@components/Select/constants'

/**
 * Get the default list height
 */
export default function getDefaultListHeight() {
  const minOptionsToShow = window.innerWidth > 768 ? 5 : 6

  const defaultOptionHeight =
    window.innerWidth > 768
      ? VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP
      : VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE

  const defaultContainerHeight = defaultOptionHeight * minOptionsToShow + defaultOptionHeight / 2

  return {
    minOptionsToShow: minOptionsToShow,
    defaultOptionHeight: defaultOptionHeight,
    defaultContainerHeight: defaultContainerHeight
  }
}

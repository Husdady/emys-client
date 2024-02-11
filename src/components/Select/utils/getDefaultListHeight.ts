// Constants
import {
  VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE,
  VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP
} from '@components/Select/constants'

/**
 * Get the default list height
 */
export default function getDefaultListHeight() {
  const minOptionsToShow = window.innerWidth > 768 ? 4 : 6

  const defaultOptionHeight =
    window.innerWidth > 768
      ? VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP
      : VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE

  const defaultListHeight = defaultOptionHeight * minOptionsToShow + defaultOptionHeight / 2

  return {
    minOptionsToShow: minOptionsToShow,
    defaultListHeight: defaultListHeight,
    defaultOptionHeight: defaultOptionHeight
  }
}

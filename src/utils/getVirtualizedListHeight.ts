// Constants
export const VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE = 55
export const VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP = 41

/**
 * Get virtualized list height for Virtualized components
 */
export default function getVirtualizedListHeight() {
  const minOptionsToShow = window.innerWidth > 768 ? 5 : 6

  const defaultOptionHeight =
    window.innerWidth <= 768
      ? VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE
      : VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP

  const defaultContainerHeight = defaultOptionHeight * minOptionsToShow + defaultOptionHeight / 2

  return {
    minOptionsToShow: minOptionsToShow,
    defaultOptionHeight: defaultOptionHeight,
    defaultContainerHeight: defaultContainerHeight
  }
}

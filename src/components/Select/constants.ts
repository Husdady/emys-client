// Types
import type { SelectMode } from './types'

// Constants
export const DEFAULT_SHOW_MASK = true
export const SORT: SelectMode = 'sort'
export const NORMAL: SelectMode = 'normal'
export const DEFAULT_MODE: SelectMode = NORMAL
export const DEFAULT_CAN_SEARCH_OPTIONS = false
export const DEFAULT_ENABLE_VIRTUALIZATION = false
export const VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE = 55
export const VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP = 41
export const MIN_OPTIONS_TO_SHOW = window.innerWidth > 768 ? 4 : 7
export const OPTIONS_CONTAINER_SELECTOR = '.select-options'
export const ACTIVE_OPTION_SELECTOR = '.active'

export const DEFAULT_OPTION_HEIGHT =
  window.innerWidth > 768
    ? VIRTUALIZED_OPTION_HEIGHT_FOR_DESKTOP
    : VIRTUALIZED_OPTION_HEIGHT_FOR_MOBILE

export const DEFAULT_LIST_HEIGHT =
  DEFAULT_OPTION_HEIGHT * MIN_OPTIONS_TO_SHOW + DEFAULT_OPTION_HEIGHT / 2

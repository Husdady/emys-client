// Interfaces
import { IconProps } from '@components/Icon/interfaces'

// Constants
export const TEXT_TYPE = 'text'
export const LINK_TYPE = 'link'

export const sharedIconProps: IconProps = {
  size: 'sm',
  className: 'stroke-3'
}

export type LinkType = typeof TEXT_TYPE | typeof LINK_TYPE

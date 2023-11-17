// Interfaces
import { IconProps } from '@components/Icon/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
export const TEXT_TYPE = 'text'
export const LINK_TYPE = 'link'

export const sharedIconProps: IconProps = {
  size: 'sm',
  className: 'stroke-3 text-gray-300'
}

export const sharedFacebookIconProps: IconProps = {
  size: 'sm',
  className: 'stroke-3 !text-blue-200'
}

export const sharedWhatsappIconProps: IconProps = {
  size: 'sm',
  className: 'stroke-3 !text-lime-300'
}

export type LinkType = typeof TEXT_TYPE | typeof LINK_TYPE

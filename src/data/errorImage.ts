// Interfaces
import { ScreenProps } from '@components/Screen/interfaces'

// Constants
import { BUG_FOUND_IMAGE } from './images'

export const DEFAULT_IMAGE: ScreenProps['image'] = {
  width: 350,
  height: 350,
  src: BUG_FOUND_IMAGE,
  alt: 'error-route-image'
}

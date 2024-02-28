// Types
import type { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/types'

// Interfaces
import { Image } from '@libs/axios/interfaces'

export interface ImagesProps extends SharedProps {
  activeImageId: string
  handleActiveImage: (image: Image, i: number) => () => void
}

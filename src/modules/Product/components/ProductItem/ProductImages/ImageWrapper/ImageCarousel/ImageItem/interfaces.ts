// Types
import type { Dispatch, SetStateAction } from 'react'

// Interfaces
import { Image } from '@libs/axios/interfaces'
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

export interface ImageItemProps extends Image, Pick<SharedProps, 'carouselRef'> {
  handlePauseOnHover?: (flag: boolean) => void
}

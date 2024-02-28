// Types
import type { Ref } from 'react'
import type { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/types'

// Interfaces
import { CarouselRef } from 'antd/lib/carousel'

export interface ImageCarouselProps extends SharedProps {
  carouselRef: Ref<CarouselRef>
}

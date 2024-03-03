// Types
import type { Ref } from 'react'

// Interfaces
import { Image } from '@libs/axios/interfaces'
import { CarouselRef } from 'antd/lib/carousel'

export interface ImageCarouselProps {
  images: Image[]
  carouselRef: Ref<CarouselRef>
}

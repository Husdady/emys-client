// Interfaces
import { MutableRefObject } from 'react'
import { Image } from '@libs/axios/interfaces'
import { CarouselRef } from 'antd/lib/carousel'

export interface SharedProps {
  images: Image[]
  activeImageId: string
  carouselRef: MutableRefObject<CarouselRef | null>
  handleActiveImage: (image: Image, i: number) => () => void
}

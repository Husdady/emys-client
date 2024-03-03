// Interfaces
import { Image } from '@libs/axios/interfaces'

export interface ImagesProps {
  images: Image[]
  activeImageId: string
  handleActiveImage: (image: Image, i: number) => () => void
}

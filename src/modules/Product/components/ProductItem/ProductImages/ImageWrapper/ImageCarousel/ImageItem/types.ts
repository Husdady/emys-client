// Interfaces
import { Image } from '@libs/axios/interfaces'
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

export type ImageItemProps = Image & Pick<SharedProps, 'carouselRef'>

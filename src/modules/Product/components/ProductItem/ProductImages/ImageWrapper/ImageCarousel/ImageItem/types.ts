// Interfaces
import { Image } from '@libs/axios/interfaces'
import { OnlyClassNameProp } from '@config/interfaces'
import { SharedProps } from '@modules/Product/components/ProductItem/ProductImages/ImageWrapper/interfaces'

export type ImageItemProps = Image & OnlyClassNameProp & Pick<SharedProps, 'carouselRef'>

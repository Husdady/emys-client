// Interfaces
import { StaticImageData } from 'next/image'
import { ButtonProps } from '@components/Button/interfaces'

export interface AvatarProps {
  src?: StaticImageData
  onOpen: ButtonProps['onClick']
}

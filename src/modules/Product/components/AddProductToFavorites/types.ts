// Components
import { ButtonProps } from '@components/Button/interfaces'

export type AddProductToFavoritesProps
  = Omit<ButtonProps, 'icon' | 'loadingTitle' | 'isShowingSpin'>

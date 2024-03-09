// Components
import { ButtonProps } from '@components/Button/interfaces'

export interface BackButtonProps
  extends Omit<ButtonProps, 'icon' | 'loadingTitle' | 'isShowingSpin'> {
  path: string
}

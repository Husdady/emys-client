// Types
import { ButtonProps } from '@components/Button/interfaces'

export type SubmitButtonProps = Pick<
  ButtonProps,
  'type' | 'icon' | 'title' | 'disabled' | 'isShowingSpin' | 'onClick' | 'loadingTitle'
>

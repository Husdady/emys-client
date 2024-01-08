// Types
import type { ReactNode } from 'react'
import type { ModalPayload } from './types'

// Interfaces
import { ModalProps } from 'antd'
import { UnknownObj } from '@config/global-interfaces'
import { ModalFooterProps } from '@components/Modal/interfaces'

export interface ModalState
  extends Omit<ModalFooterProps, 'custom'>,
    Omit<
      ModalProps,
      | 'open'
      | 'style'
      | 'onCancel'
      | 'onAccept'
      | 'closeIcon'
      | 'okButtonProps'
      | 'cancelButtonProps'
    > {
  title: string
  isShowing: boolean
  icon?: ReactNode
  footer?: ReactNode
  content: ReactNode
  onCloseModal?: () => void
}

export interface ModalContext extends ModalState {
  hideModal: () => void
  showModal: (payload: ModalPayload) => void
  mutate: (payload: UnknownObj) => void
}

// Types
import type { ReactNode } from 'react'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

export interface ModalTitleProps {
  title: string
  icon?: ReactNode
}

export interface ModalFooterProps {
  custom?: ReactNode
  isShowingAcceptButton?: boolean
  isShowingCancelButton?: boolean
  acceptButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  onCancel?: () => void
  onAccept?: () => void
}

export interface HighlightedProps {
  value: string
  withoutQuots?: boolean
}

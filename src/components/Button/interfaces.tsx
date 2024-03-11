// Librarys
import React from 'react'

// Types
import type { ButtonType } from '@config/types'

// Interfaces
import { TitleProp, OnlyStyleProp, OnlyClassNameProp } from '@config/interfaces'

export interface SpinProps extends OnlyStyleProp, OnlyClassNameProp {
  title?: React.ReactNode
  center?: boolean
  align?: 'vertical' | 'horizontal'
  size?: 'w-2' | 'w-4' | 'w-6' | 'w-8'
  customSvg?: OnlyStyleProp & OnlyClassNameProp
  customTitle?: OnlyStyleProp & OnlyClassNameProp
}

export interface ButtonContentProps
  extends Pick<ButtonProps, 'icon' | 'title' | 'loadingTitle' | 'customSpin'> {
  loading?: boolean
  titleClassName?: string
  titleStyle?: React.CSSProperties
}

export interface ButtonProps
  extends OnlyStyleProp,
    OnlyClassNameProp,
    TitleProp,
    Omit<ButtonType, 'title' | 'onDoubleClick'> {
  id?: string
  form?: string
  disabled?: boolean
  titlePopup?: string
  loadingTitle?: string
  icon?: React.ReactNode
  customSpin?: SpinProps
  isShowingSpin?: boolean
  type?: 'button' | 'reset' | 'submit'
  onDoubleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

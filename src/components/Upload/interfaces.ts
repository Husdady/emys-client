/* eslint-disable @typescript-eslint/no-explicit-any */
// Librarys
import React from 'react'

// Types
import type { InfoParam } from './types'

// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

export interface ChangeParams extends Omit<InfoParam, 'event'> {
  previewFile: string
}

export interface UploadPhotoProps extends OnlyClassNameProp {
  photo?: React.ReactNode
  titlePopup?: string
  containerClassName?: string
  onChange?: (info: ChangeParams) => void
  onRemove?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

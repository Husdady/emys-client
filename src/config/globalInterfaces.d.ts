// React
import React from 'react'

// Interfaces
import { ChangeParams } from '@components/Upload/interfaces'
import { InputErrorProps } from '@components/InputError/interfaces'
import { InputLabelProps } from '@components/InputLabel/interfaces'
import { APIResponse, APIBadResponse } from '@libs/axios/interfaces'

export interface UnknownObj {
  [key: string]: unknown
}

export interface InputTypeRef {
  ref: (ref: HTMLInputElement) => void
}

export interface TextAreaTypeRef {
  ref: (ref: HTMLTextAreaElement) => void
}

export interface OnlyChildrenProp {
  children: React.ReactNode
}

export interface OnlyStyleProp {
  style?: React.CSSProperties
}

export interface OnlyClassNameProp {
  className?: string
}

export interface OnlyErrorProp {
  error: string | Error | React.ErrorInfo | null
}

export interface OnlyMessageProp {
  message: string
}

export interface LoaderResponse {
  apiResponse: APIResponse | APIBadResponse | null
}

export interface TitleProp<T extends HTMLElement = HTMLSpanElement> {
  title: React.ReactNode
  customTitle?: Omit<React.HTMLAttributes<T>, 'title'>
}

export interface FormLabel {
  label?: InputLabelProps
  textLabel?: React.ReactNode
}

export interface FormError {
  error?: string
  hasError?: boolean
  customError?: Omit<InputErrorProps, 'value'>
}

export interface UpdatePhotoState {
  photo?: ChangeParams['file']
  previewPhoto?: string
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// Types
import type { UseFormSetError } from 'react-hook-form/dist/types'
import type { InfoStatus, ErrorStatus, SuccessStatus, WarningStatus } from './status'

// Interfaces
import { AxiosError, AxiosRequestConfig } from 'axios'

export interface ErrorValidations {
  [key: string]: string[]
}

export interface APIResult {
  refreshToken?: string
  [key: string]: unknown
}

export interface APIResponse {
  message?: string
  result?: APIResult
  status?: InfoStatus | SuccessStatus | WarningStatus
}

export interface APIBadResponse {
  message: string
  status: ErrorStatus | WarningStatus
  errors?: string[] | ErrorValidations
}

export interface AxiosParams {
  url: string
  signOut?: () => void
  hideModal?: () => void
  method?: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
  headers?: AxiosRequestConfig['headers']
  setError?: UseFormSetError<any>
}

export interface ValidateBadResponseParams {
  signOut?: () => void
  hideModal?: () => void
  payload: AxiosError<APIBadResponse>
  setError?: UseFormSetError<any>
}

export interface GetBadResponse extends Omit<ValidateBadResponseParams, 'payload'> {
  payload: APIBadResponse
}

export interface TimeStamps {
  createdAt: Date
  updatedAt: Date
}

export interface Image {
  id: string
  url: string
  size: number
  width: number
  height: number
  path: string
  format: string
  filename: string
  public_id: string
}

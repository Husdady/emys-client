// Types
import type { NextRouter } from 'next/router'

// Interfaces
import { APIResponse, APIBadResponse } from '@libs/axios/interfaces'

export interface ValidateLoaderParams {
  route?: string
  redirect?: boolean
  router: NextRouter
  showErrorMessage?: boolean
  showSuccesMessage?: boolean
  showWarningMessage?: boolean
  showFloatMessages?: boolean
  apiResponse?: APIResponse | APIBadResponse | null
}

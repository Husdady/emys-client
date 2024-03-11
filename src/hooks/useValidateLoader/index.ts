// Librarys
import {
  showFloatErrorMessage,
  showFloatSuccessMessage,
  showFloatWarningMessage
} from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'
import useMounted from '@hooks/useMounted'

// Interfaces
import { ValidateLoaderParams } from './interfaces'

// Utils
import isObject from '@utils/isObject'

// Constants
import { HOME_PATH } from '@data/paths'
import { ERROR_STATUS, SUCCESS_STATUS, WARNING_STATUS } from '@libs/axios/status'

/**
 * Validate Loader Data
 * @param {ValidateLoaderParams} params Receive a float message
 * @returns {() => void} Callback
 */
export default function useValidateLoader({
  router,
  apiResponse = {},
  route = HOME_PATH,
  redirect = true,
  showErrorMessage = true,
  showSuccesMessage = true,
  showWarningMessage = true,
  showFloatMessages = true
}: ValidateLoaderParams): () => void {
  // Validar 'loader' en una página
  const validateLoader = useCallback(() => {
    if (apiResponse === null || !isObject(apiResponse)) return

    // Redirect to route if its is necesssary
    if (redirect) {
      router.replace(route)
    }

    // Show float message when is warning status
    if (apiResponse.status === WARNING_STATUS) {
      if (!(showFloatMessages && showWarningMessage)) return
      showFloatWarningMessage(apiResponse.message)
    }

    // Show float message when is error status
    if (apiResponse.status === ERROR_STATUS) {
      if (!(showFloatMessages && showErrorMessage)) return
      showFloatErrorMessage(apiResponse.message)
    }

    // Show float message when is success status
    if (apiResponse.status === SUCCESS_STATUS) {
      if (!(showFloatMessages && showSuccesMessage)) return
      showFloatSuccessMessage(apiResponse.message)
    }
  }, [route])

  useMounted(() => {
    validateLoader()
  }, [])

  return validateLoader
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// Librarys
import { saveTokenOnAxios } from '@libs/axios'
import { saveTokenOnGraphqlClient } from '@libs/graphql'
import {
  showFloatInfoMessage,
  showFloatErrorMessage,
  showFloatSuccessMessage,
  showFloatWarningMessage
} from '@libs/antd/message'

// Interfaces
import { AxiosResponse } from 'axios'
import {
  APIResponse,
  GetBadResponse,
  ErrorValidations,
  ValidateBadResponseParams
} from './interfaces'

// Utils
import parseError from './parseError'
import isString from '@utils/isString'
import isFunction from '@utils/isFunction'
import isUndefined from '@utils/isUndefined'

// Constants
import { JWT_ERRORS } from './constants'
import { LOGIN_PATH } from '@assets/data/paths'
import {
  INFO_STATUS,
  ERROR_STATUS,
  SUCCESS_STATUS,
  WARNING_STATUS,
  NO_CONTENT_STATUS
} from './status'

export default class AxiosValidations {
  private readonly errorCodes = {
    400: this.showToast,
    401: this.throw401Response,
    422: this.throw422Response
  }

  /**
   * Function that validate a valid reply from the API
   * @param {AxiosResponse<APIResponse>} payload Axios response
   * @return {void}
   */
  validateSuccessResponse(payload: AxiosResponse<APIResponse>): void {
    // Get response result
    const { result, status, message } = payload.data

    // End validation if 'statusCode' is '204' or 'undefined'
    if (payload.status === NO_CONTENT_STATUS) return
    if (isUndefined(status)) return

    // Show toast depending on the state
    status === INFO_STATUS && showFloatInfoMessage(message)
    status === SUCCESS_STATUS && showFloatSuccessMessage(message)
    status === WARNING_STATUS && showFloatWarningMessage(message)

    // Get the refresh token
    const refreshToken = result?.refreshToken
    if (!isString(refreshToken)) return // Check if not exists a 'refreshToken'

    saveTokenOnAxios(refreshToken)
    saveTokenOnGraphqlClient(refreshToken)
  }

  /**
   * Function that validates the form errors from the API
   * @param {ValidateBadResponseParams} params Axios Error
   * @return {void}
   */
  async validateBadResponse(params: ValidateBadResponseParams): Promise<void> {
    const { payload, signOut, setError, hideModal } = params // Get params

    // Bad response not exists
    if (isUndefined(payload.response)) {
      return showFloatErrorMessage(parseError(payload.message))
    }

    const k = payload.response.status // Get response status
    const data = payload.response.data // Get response data

    // Get available bad response type
    const getResponse = this.errorCodes[k as keyof typeof this.errorCodes]

    // Exists a custom response in function format
    if (isFunction(getResponse)) {
      return getResponse({
        payload: data,
        signOut: signOut,
        setError: setError,
        hideModal: hideModal
      })
    }

    // Define the error
    const error = isString(data.message) ? data.message : payload.message

    // Show error float message
    return showFloatErrorMessage(parseError(error))
  }

  /**
   * Function that validates HTTP status '401'
   * @param {GetBadResponse} params Params received by the function that validates the errors
   * @return {void}
   */
  private throw401Response(params: GetBadResponse): void {
    AxiosValidations.prototype.showToast(params)
    const errors = params.payload.errors
    if (!Array.isArray(errors)) return // Errors dont exists in array format

    const firstError = errors[0] // Get first error
    if (!JWT_ERRORS.includes(firstError)) return // Check if its a JWT error

    params.hideModal?.()
    params.signOut?.()
    window.location.href = LOGIN_PATH
  }

  /**
   * Function that validates the '422' error
   * @param {GetBadResponse} params Params received by the function that validates the errors
   * @return {void}
   */
  private throw422Response(params: GetBadResponse): void {
    const { payload, setError } = params // Get params
    AxiosValidations.prototype.showToast(params) // Show toast
    if (isUndefined(setError)) return // Stop function

    const errors = payload.errors as ErrorValidations // Get form errors
    const keys = Object.keys(errors) // Get each form field

    // Focus error field
    const errorOptions = {
      shouldFocus: true
    }

    // Update form with the errors returned by the API
    for (const key of keys) {
      // Create error
      const error = {
        type: 'server',
        message: errors[key][0]
      }

      // Set new error on the form
      setError(key, error, errorOptions)
    }
  }

  /**
   * Shows a toast on the screen
   * @param {APIBadResponse} payload Axios error
   * @return {void}
   */
  private showToast({ payload }: GetBadResponse): void {
    const { status, message } = payload
    status === ERROR_STATUS && showFloatErrorMessage(message) // Show error message
    status === WARNING_STATUS && showFloatWarningMessage(message) // Show warning message
  }
}

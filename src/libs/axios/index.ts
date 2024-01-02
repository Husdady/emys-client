// Librarys
import axios, { AxiosError } from 'axios'
import { hideAllFloatMessages } from '@libs/antd/message'

// Types
import type { AxiosBaseQueryResponse } from './types'

// Interfaces
import { APIResponse, APIBadResponse } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import AxiosValidations from './validations'

// Constants
import { common, multipart } from './constants'

// Environment variables
import { API_URL, SECRET_PASSWORD } from '@config/envs'

// Create 'axios' instance
export const instance = axios.create({
  baseURL: API_URL + '/api',
  headers: {
    common: {
      SECRET_PASSWORD: SECRET_PASSWORD
    },
    post: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
})

// Create axios validations
const validations = new AxiosValidations()

/**
 * Callback that define the base axios request to the API
 * @returns {AxiosBaseQueryResponse} Axios response
 */
export const axiosBaseQuery = (): AxiosBaseQueryResponse => {
  return async (payload) => {
    hideAllFloatMessages()

    try {
      // Make petition to any endpoint API
      const result = await instance<APIResponse>({
        url: payload.url,
        data: payload.data,
        method: payload.method,
        params: payload.params,
        headers: payload.headers
      })

      // Validate API response
      validations.validateSuccessResponse(result)

      // Return data
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError<APIBadResponse>

      // Validate errors returned by the API
      await validations.validateBadResponse({
        payload: err,
        signOut: payload.signOut,
        setError: payload.setError,
        hideModal: payload.hideModal
      })

      return {
        error: {
          status: err.response?.status,
          data: isUndefined(err.response?.data) ? err.message : err.response?.data
        }
      }
    }
  }
}

/**
 * Save token in Axios
 * @param token Access token
 * @return {void} Void
 */
export function saveTokenOnAxios(token: string): void {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

/**
 * Remove Axios token
 * @return {void} Void
 */
export function removeTokenFromAxios(): void {
  delete instance.defaults.headers.common.Authorization
}

/**
 * Add 'multipart/form-data' to Axios instance
 * @return {void} Void
 */
export function addFormDataToRequestOnAxios(): void {
  Object.assign(instance.defaults.headers.put, multipart)
  Object.assign(instance.defaults.headers.post, multipart)
  Object.assign(instance.defaults.headers.common, multipart)
}

/**
 * Remove 'multipart/form-data' to Axios instance
 * @return {void} Void
 */
export function clearFormDataFromRequestOnAxios(): void {
  Object.assign(instance.defaults.headers.put, common)
  Object.assign(instance.defaults.headers.post, common)
  Object.assign(instance.defaults.headers.common, common)
}


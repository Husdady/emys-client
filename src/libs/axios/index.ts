// Librarys
import axios, { AxiosError } from 'axios'
import { hideAllFloatMessages } from '@libs/antd/message'

// Types
import type { AxiosBaseQueryResponse } from './types'

// Interfaces
import { APIResponse, APIBadResponse } from './interfaces'

// Utils
import isObject from '@utils/isObject'
import isString from '@utils/isString'
import isUndefined from '@utils/isUndefined'
import AxiosValidations from './validations'

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
 * Save token in axios
 * @param token Access token
 * @return {void} Void
 */
export function saveBearerTokenOnAxios(token: string): void {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

/**
 * Remove axios token
 * @return {void} Void
 */
export function removeBearerTokenFromAxios(): void {
  delete instance.defaults.headers.common.Authorization
}

/**
 * Add 'multipart/form-data' to Axios instance
 * @return {void} Void
 */
export function addFormDataToPutRequestOnAxios(): void {
  instance.defaults.headers.put.Accept = 'multipart/form-data'
  instance.defaults.headers.put['Content-Type'] = 'multipart/form-data'
}

/**
 * Remove 'multipart/form-data' to Axios instance
 * @return {void} Void
 */
export function removeFormDataToPutRequestOnAxios(): void {
  delete instance.defaults.headers.common.Accept
  delete instance.defaults.headers.common['Content-Type']
}

/**
 * Get token from localstorage
 * @param {string} REDUX_KEY Redux Key
 * @return {string | undefined} Token
 */
export function getTokenFromLocalStorage(REDUX_KEY: string): string | undefined {
  if (typeof window === 'undefined') return

  // Get 'storage'
  const storage = window.localStorage.getItem('persist:' + REDUX_KEY)
  if (storage === null) return // Terminate the function if the 'storage' does not exist

  // Convert 'storage' from string to object
  const store = JSON.parse(storage)

  // End function if the 'auth' property does not exist in the 'store'
  if (!isObject(store) || (isObject(store) && !('auth' in store))) return

  // Convert 'auth' from string to object
  const auth = JSON.parse(store.auth)
  if (!isObject(auth) || (isObject(auth) && !('token' in auth))) return // End function if token does not exist

  return auth.token
}

/**
 * Load token from localstorage in Axios
 * @param {string} REDUX_KEY Redux Key
 * @return {void} Void
 */
export function loadBearerTokenOnAxios(REDUX_KEY: string): void {
  // Get token and validates it
  const token = getTokenFromLocalStorage(REDUX_KEY)
  if (!isString(token)) return

  saveBearerTokenOnAxios(token)
}

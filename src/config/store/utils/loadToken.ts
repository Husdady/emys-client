// Librarys
import { saveTokenOnAxios } from '@libs/axios'
import { saveTokenOnGraphqlClient } from '@libs/graphql'

// Interfaces
import { EnhancedStore } from '@reduxjs/toolkit'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

/**
 * Load Token on Axios and Graphql
 * @param {EnhancedStore} store Store
 * @returns {void} Void
 */
export default function loadToken(store: EnhancedStore): void {
  const state = store.getState() // Get store
  const token = state?.auth?.token // Get token from store

  // Validate token
  if (!isString(token) || isEmptyString(token)) return

  // Save token on Axios and GraphQL
  saveTokenOnAxios(token)
  saveTokenOnGraphqlClient(token)
}

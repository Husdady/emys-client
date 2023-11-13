// Librarys
import { GraphQLClient } from 'graphql-request'

// Environment variables
import { API_URL } from '@config/envs'

// Export GraphQL client
export const client = new GraphQLClient(API_URL + '/graphql')

/**
 * Save token on GraphQL client
 * @param {string} token Token returned by the API
 */
export function saveBearerTokenOnGraphqlClient(token: string) {
  client.setHeader('Authorization', `Bearer ${token}`)
}

/**
 * Remove token from GraphQL client
 * @returns {void} Void
 */
export function removeBearerTokenFromGraphqlClient(): void {
  client.setHeader('Authorization', '')
}

/**
 * Load token from Local Storage in GraphQL Client
 * @returns {void} Void
 */
export function loadBearerTokenOnGraphqlClient(REDUX_KEY: string): void {
  // Get 'storage'
  const storage = window.localStorage.getItem('persist:' + REDUX_KEY)
  if (storage === null) return // End function if 'storage' does not exist

  // Convert 'storage' from string to object
  const store = JSON.parse(storage)
  // End function if the 'auth' property does not exist in the 'store'
  if (!('auth' in store)) return

  // Convert 'auth' from string to object
  const auth = JSON.parse(store.auth)
  if (!('token' in auth)) return // End function if token does not exist

  saveBearerTokenOnGraphqlClient(auth.token)
}

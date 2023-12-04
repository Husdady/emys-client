// Librarys
import { GraphQLClient } from 'graphql-request'

// Constants
import { GRAPHQL_PATH } from '@assets/data/paths'

// Environment variables
import { API_URL } from '@config/envs'

// Export GraphQL client
export const client = new GraphQLClient(API_URL + GRAPHQL_PATH)

/**
 * Save token on GraphQL client
 * @param {string} token Token returned by the API
 */
export function saveTokenOnGraphqlClient(token: string) {
  client.setHeader('Authorization', `Bearer ${token}`)
}

/**
 * Remove token from GraphQL client
 * @returns {void} Void
 */
export function removeTokenFromGraphqlClient(): void {
  client.setHeader('Authorization', '')
}

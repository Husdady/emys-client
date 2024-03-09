// Types
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

// Interfaces
import { LoaderResponse } from '@config/globalInterfaces'

// Environment variables
import { API_URL, SECRET_PASSWORD } from '@config/envs'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { DEFAULT_LOADER_RESPONSE } from '@assets/data/loaders'

/**
 * Validate API token
 * @param {GetServerSidePropsContext} context Context
 * @returns {LoaderResponse} Api Response
 */
export default async function validateToken(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<LoaderResponse>> {
  try {
    // Get token from query params
    const query = context.query
    const token = query.token as string

    // Validates token
    if (!isString(token) || isEmptyString(token)) {
      return DEFAULT_LOADER_RESPONSE
    }

    // Make request for validates the token
    const res = await fetch(`${API_URL}/api/reset-password/validate-token`, {
      headers: {
        Authorization: `Bearer ${String(token)}`,
        SECRET_PASSWORD: SECRET_PASSWORD as string,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    // Serialize to JSON
    const apiResponse = await res.json()

    return {
      props: { apiResponse: apiResponse }
    }
  } catch (error) {
    return { props: { apiResponse: null } }
  }
}

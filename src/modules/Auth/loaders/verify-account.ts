// Types
import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next'

// Interfaces
import { LoaderResponse } from '@config/global-interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { DEFAULT_LOADER_RESPONSE } from '@assets/data/loaders'

// Environment variables
import { API_URL, SECRET_PASSWORD } from '@config/envs'

/**
 * Verify user account
 * @returns {Promise<Response>} Api Response
 */
export default async function verifyAccount(
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

    // Make request for verify user account
    const res = await fetch(`${API_URL}/api/verify-account`, {
      method: 'POST',
      headers: {
        SECRET_PASSWORD: SECRET_PASSWORD as string,
        Authorization: `Bearer ${token as string}`
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

// Librarys
import { ClientError } from 'graphql-request'
import { hideFloatMessageByKey, showFloatWarningMessage } from '@libs/antd/message'

// Utils
import removeAuthKey from './removeAuthKey'

// Constants
import { LOGIN_PATH } from '@data/paths'

export const UNAUTHORIZED_KEY = 'unauthorized-key'

/**
 * Validate GraphQL errors
 * @param {ClientError} params Receive a 'name', 'stack' and 'response'
 */
export default function validateGraphqlErrors({ name, stack, response }: ClientError) {
  const errors = response.errors // Get errors from response

  // Validates 'errors'
  if (!Array.isArray(errors)) return {}

  const mainError = errors[0] // Get main error
  const extensions = mainError.extensions // Get extensions
  const exception = extensions.exception as any // Get exception
  const status = exception?.status as number // Get status from exception
  const errorMessage = exception?.message as string // Get error message

  if (status === 401) {
    removeAuthKey()
    hideFloatMessageByKey(UNAUTHORIZED_KEY)
    showFloatWarningMessage({ key: UNAUTHORIZED_KEY, content: errorMessage })
    window.location.href = LOGIN_PATH // Redirect to Login
  }

  return {
    name: name,
    stack: stack,
    status: status,
    message: errorMessage
  }
}

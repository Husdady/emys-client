// Hooks
import useAuth from '@hooks/useAuth'
import { useCallback } from 'react'
import { useGenerateKeyMutation } from '@modules/Account/api/update-information'

// Types
import type { UseSecretKeyParams } from './types'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'
import copyToClipboard from '@utils/copyToClipboard'

/**
 * Hook that implement the logic of the Secret Key component
 * @param params Secret Key of the user
 */
export default function useSecretKey(params: UseSecretKeyParams) {
  const auth = useAuth()
  const [trigger, result] = useGenerateKeyMutation()

  // Generate new key for the user
  const generateNewKey = useCallback(async () => {
    // Validate 'payload'
    const payload = await trigger({ signOut: auth.signOut })
    if ('error' in payload) return

    // Validate 'secretKey'
    const secretKey = payload?.data?.result?.secretKey
    if (!isString(secretKey) || isEmptyString(secretKey)) return // Stop function

    params.setValue('secretKey', secretKey)
  }, [])

  // Copy secret key of authenticated user
  const copySecretKey = useCallback(() => {
    if (!isString(params.secret) || isEmptyString(params.secret)) return
    void copyToClipboard(params.secret)
  }, [params.secret])

  return {
    ...result,
    copy: copySecretKey,
    generate: generateNewKey
  }
}

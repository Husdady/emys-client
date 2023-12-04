// Hooks
import { useCallback, useState } from 'react'
import useAuth from '@hooks/useAuth'
import { useRequestCodeMutation } from '@modules/Account/api/request-code'

export const TIMES_FOR_REQUEST = 2

/**
 * Hook that request the user code and send message to the user email
 */
export default function useRequestMyCode() {
  const auth = useAuth()
  const [timesRequested, setTimeRequested] = useState(0)
  const [requestCode, result] = useRequestCodeMutation()

  // Download 'SECRET_KEY' of user
  const request = useCallback(async () => {
    // Request code
    const payload = requestCode({ signOut: auth.signOut })

    if ('error' in payload) return // Stop function if exists an error

    // Increase the requested times
    if (timesRequested < TIMES_FOR_REQUEST) {
      setTimeRequested((count) => count + 1)
    }
  }, [])

  return {
    ...result,
    request: request,
    timesRequested: timesRequested,
    maxRequest: TIMES_FOR_REQUEST,
    requestLimit: timesRequested === TIMES_FOR_REQUEST
  }
}

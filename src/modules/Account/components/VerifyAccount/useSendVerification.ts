/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import useAuth from '@hooks/useAuth'
import { useState, useCallback } from 'react'
import { useSendVerificationMutation } from '@modules/Account/api/send-verification'

// Utils
import isUndefined from '@utils/isUndefined'

export const TIMES_FOR_REQUEST = 3

export default function useSendVerification(times?: number) {
  const auth = useAuth()
  const [timesRequested, setTimeRequested] = useState(0)
  const [send, result] = useSendVerificationMutation()

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(async () => {
    if (auth.user === null) return
    if (auth.user.status === 'verified') return

    // Send email verification
    const payload = await send(null)

    if ('error' in payload) return
    const limit = isUndefined(times) ? TIMES_FOR_REQUEST : times

    if (timesRequested < limit) {
      setTimeRequested((count) => count + 1)
    }
  }, [timesRequested])

  return {
    result: result,
    submit: submit,
    timesRequested: timesRequested,
    maxRequest: TIMES_FOR_REQUEST,
    requestLimit: timesRequested === TIMES_FOR_REQUEST
  }
}

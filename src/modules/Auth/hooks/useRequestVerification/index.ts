/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import { useState, useCallback } from 'react'
import { useRequestNewVerificationMutation } from '@modules/Auth/api/register'

// Utils
import isUndefined from '@utils/isUndefined'

const TIMES_FOR_REQUEST = 7

/**
 * Hook for request a new verification
 * @param {number|undefined} times Times for request again the verification 
 */
export default function useRequestVerification(times?: number) {
  const [timesRequested, setTimeRequested] = useState(0)
  const [requestVerificationResend, result] = useRequestNewVerificationMutation()

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(async () => {
    const payload = await requestVerificationResend(null)

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

// Hooks
import { useState, useCallback } from 'react'

/**
 * Hook for if a request is making or not
 */
export default function useValidateRequest() {
  const [isMakingRequest, setMakingRequest] = useState(false)

  // Callback for make request
  const makeRequest = useCallback(() => {
    setMakingRequest(true)
  }, [])

  // Callback for stop request
  const stopRequest = useCallback(() => {
    setMakingRequest(false)
  }, [])

  return {
    makeRequest: makeRequest,
    stopRequest: stopRequest,
    isMakingRequest: isMakingRequest
  }
}

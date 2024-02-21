// Hooks
import { useState, useEffect } from 'react'

/**
 * Hook for check the status connection of the user
 */
export default function useNetwork() {
  const isWindowAvailable = typeof window !== 'undefined'
  const [isOnline, setIsOnline] = useState(isWindowAvailable ? navigator.onLine : false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
    }

    const handleOffline = () => {
      setIsOnline(false)
    }

    if (isWindowAvailable) {
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)

      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    }
  }, [])

  return isOnline
}

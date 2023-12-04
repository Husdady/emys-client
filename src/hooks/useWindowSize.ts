// Librarys
import { useState, useEffect } from 'react'

/**
 * Hook for get the window size
 */
export default function useWindowSize() {
  const [size, setSize] = useState([0, 0])

  useEffect(() => {
    let mounted = true

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }

    if (mounted) {
      updateSize()
      window.addEventListener('resize', updateSize)
    }

    return () => {
      mounted = false
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return size
}

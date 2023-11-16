// Hooks
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

// Constants
import { HOME_PATH } from '@assets/paths'

/**
 * Hook for implements the logic of the Header component
 */
export default function useHeader() {
  const pathname = usePathname()
  const isHomePath = useMemo(() => pathname === HOME_PATH, [pathname])

  return {
    isHomePath: isHomePath
  }
}

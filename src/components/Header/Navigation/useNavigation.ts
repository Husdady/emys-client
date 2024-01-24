// Hooks
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'
import { usePathname } from 'next/navigation'
import { useRef, useMemo, useCallback } from 'react'

// Constants
import { HOME_PATH } from '@assets/data/paths'

/**
 * Hook for implements the logic of the Navigation component
 */
export default function useNavigation() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const navRef = useRef<HTMLElement | null>(null)
  const timeout = useRef<ReturnType<typeof setTimeout> | number>(0)

  // Check if is the Home page
  const isHomePage = useMemo(() => pathname === HOME_PATH, [pathname])

  // Callback for show or hide the navigation in Desktop devices
  const handleToggleShowNav = useCallback(() => {
    if (!isHomePage || navRef.current === null) return

    if (window.scrollY > 450 && window.scrollY < 1400) {
      if (!navRef.current.classList.contains('animate__fadeOutDown')) {
        navRef.current.classList.add('animate__fadeOutDown')
      }

      if (navRef.current.classList.contains('animate__slideInDown')) {
        navRef.current.classList.remove('animate__slideInDown')
      }

      if (!navRef.current.classList.contains('hidden')) {
        timeout.current = setTimeout(() => {
          navRef.current?.classList.add('hidden')
          clearTimeout(timeout.current)
        }, 500)
      }
    } else {
      clearTimeout(timeout.current)

      if (!navRef.current.classList.contains('animate__slideInDown')) {
        navRef.current.classList.add('animate__slideInDown')
      }

      if (
        navRef.current.classList.contains('hidden') ||
        navRef.current.classList.contains('animate__fadeOutDown')
      ) {
        navRef.current.classList.remove('hidden', 'animate__fadeOutDown')
      }
    }
  }, [isHomePage])

  useMounted(() => {
    window.addEventListener('scroll', handleToggleShowNav)

    return () => {
      window.removeEventListener('scroll', handleToggleShowNav)
    }
  }, [handleToggleShowNav])

  return {
    navRef: navRef,
    isAuthenticated: isAuthenticated
  }
}

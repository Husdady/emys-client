// Hooks
import useMounted from '@hooks/useMounted'
import { useRef, useCallback } from 'react'

// Constants
import { scrollIntoViewArgs } from '@data/scroll'

const SCROLL_DELAY = 3000
export const ACTIVE_NAVIGATION_ITEM = '.navigation-list-item > a[aria-current="page"]'

/**
 * Hook for implements the logic of the MenuContent component
 */
export default function useMountedNavigationItem() {
  const timeout = useRef<ReturnType<typeof setTimeout> | number>(0)
  const navigationRef = useRef<HTMLDivElement | null>(null)

  // Callback for make scroll to the active navigation item
  const scrollToActiveNavigationItem = useCallback(() => {
    if (window.innerWidth <= 1080) return

    timeout.current = setTimeout(() => {
      if (navigationRef.current !== null) {
        // Get the active navigation item
        const activeNavigationItem = navigationRef.current.querySelector(
          ACTIVE_NAVIGATION_ITEM
        ) as HTMLElement

        if (activeNavigationItem === null) return // Stop function

        // Make scroll to the active navigation item
        activeNavigationItem.scrollIntoView(scrollIntoViewArgs)
      }
    }, SCROLL_DELAY)
  }, [])

  useMounted(() => {
    scrollToActiveNavigationItem()
    window.addEventListener('resize', scrollToActiveNavigationItem)

    return () => {
      clearTimeout(timeout.current)
      window.removeEventListener('resize', scrollToActiveNavigationItem)
    }
  }, [navigationRef.current])

  return {
    navigationRef: navigationRef
  }
}

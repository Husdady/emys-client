// Hooks
import useTheme from '@hooks/useTheme'
import { useRef, useState, useCallback } from 'react'

// Constants
import { scrollIntoViewArgs } from '@assets/data/scroll'
import { ACTIVE_NAVIGATION_ITEM } from '@components/Header/MobileNavigation/MenuContent/useMenuContent'

/**
 * Hook for implements the logic of the MenuLeft component
 */
export default function useMobileNavigation() {
  const { isLightTheme } = useTheme()
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [isShowingMenu, setShowingMenu] = useState(false)

  // Callback for hide the menu
  const hideMenu = useCallback(() => setShowingMenu(false), [])

  // Callback for toggle the menu
  const toggleMenu = useCallback(() => {
    // Toggle scrollbar from body
    document.body.classList.toggle('overflow-hidden')

    setShowingMenu((s) => {
      // Check if Menu is not showing
      if (!s && menuRef.current !== null) {
        // Get the active navigation item
        const activeNavigationItem = menuRef.current.querySelector(
          ACTIVE_NAVIGATION_ITEM
        ) as HTMLElement

        // Validate active navigation item
        if (activeNavigationItem !== null) {
          // Make scroll to the active navigation item
          activeNavigationItem.scrollIntoView(scrollIntoViewArgs)
        }
      }

      return !s
    })
  }, [isShowingMenu])

  return {
    menuRef: menuRef,
    hideMenu: hideMenu,
    toggleMenu: toggleMenu,
    isLightTheme: isLightTheme,
    isShowingMenu: isShowingMenu
  }
}

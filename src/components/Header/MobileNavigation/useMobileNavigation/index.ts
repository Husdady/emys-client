// Hooks
import useCustomQueries from './useCustomQueries'
import { useRef, useState, useCallback, useMemo } from 'react'
import useShowQuickSearchModal from '@components/FloatButtons/SearchButton/useShowQuickSearchModal'

// Types
import type { modes } from './constants'

// Constants
import { DEFAULT_MENU, USER_MENU } from './constants'
import { scrollIntoViewArgs } from '@assets/data/scroll'
import { ACTIVE_NAVIGATION_ITEM } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/useMenuContent'

/**
 * Hook for implements the logic of the MenuLeft component
 */
export default function useMobileNavigation() {
  const customQueries = useCustomQueries()
  const [mode, setMode] = useState<modes>(DEFAULT_MENU)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [isShowingMenu, setShowingMenu] = useState(false)
  const showQuickSearchModal = useShowQuickSearchModal()

  // Check if is showing the User Menu
  const isShowingUserMenu = useMemo(() => {
    return isShowingMenu && mode === USER_MENU
  }, [mode, isShowingMenu])

  // Check if is showing the Default Menu
  const isShowingDefaultMenu = useMemo(() => {
    return isShowingMenu && mode === DEFAULT_MENU
  }, [mode, isShowingMenu])

  // Callback for hide the menu
  const hideMenu = useCallback(() => setShowingMenu(false), [])

  // Callback for show the User menu
  const showUserMenu = useCallback(() => {
    setMode(USER_MENU)
    setShowingMenu(true)
  }, [])

  // Callback for toggle the Default Menu
  const toggleMenu = useCallback(() => {
    // Validate and update mode
    if (mode !== DEFAULT_MENU) {
      setMode(DEFAULT_MENU)
    }

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
  }, [mode, isShowingMenu])

  return {
    menuRef: menuRef,
    hideMenu: hideMenu,
    toggleMenu: toggleMenu,
    isShowingMenu: isShowingMenu,
    customQueries: customQueries,
    showQuickSearchModal: showQuickSearchModal,
    menuData: {
      hideMenu: hideMenu,
      toggleMenu: toggleMenu,
      isShowingMenu: isShowingDefaultMenu
    },
    userMenuData: {
      hideMenu: hideMenu,
      showMenu: showUserMenu,
      toggleMenu: toggleMenu,
      isShowingMenu: isShowingUserMenu
    }
  }
}

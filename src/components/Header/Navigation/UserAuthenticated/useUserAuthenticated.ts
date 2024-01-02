// Hooks
import { useState, useCallback } from 'react'

function toggleMenu() {
  return null
}

/**
 * Hook for implements the logic of the UserAuthenticated component
 */
export default function useUserAuthenticated() {
  const [isShowingMenu, setShowingMenu] = useState(false)

  // Callback for show the User menu
  const showMenu = useCallback(() => setShowingMenu(true), [])

  // Callback for hide the User menu
  const hideMenu = useCallback(() => setShowingMenu(false), [])

  return {
    menuData: {
      showMenu: showMenu,
      hideMenu: hideMenu,
      toggleMenu: toggleMenu,
      isShowingMenu: isShowingMenu
    }
  }
}

// Hooks
import useAuth from '@hooks/useAuth'
import { useState, useCallback } from 'react'

function toggleMenu() {
  return null
}

/**
 * Hook for implements the logic of the UserAuthenticated component
 */
export default function useUserAuthenticated() {
  const { user } = useAuth()
  const [isShowingMenu, setShowingMenu] = useState(false)

  // Callback for show the User menu
  const showMenu = useCallback(() => setShowingMenu(true), [])

  // Callback for hide the User menu
  const hideMenu = useCallback(() => setShowingMenu(false), [])

  return {
    user: user,
    menuData: {
      showMenu: showMenu,
      hideMenu: hideMenu,
      toggleMenu: toggleMenu,
      isShowingMenu: isShowingMenu
    }
  }
}

// Hooks
import { useState, useCallback } from 'react'

/**
 * Hook that shows or hide the Header
 */
export default function useEyeButton() {
  const [isShowingHeader, setShowingHeader] = useState(true)

  // Event click on button for show modal for create new action
  const toggleShowHeader = useCallback(() => {
    const mainNavigation = document.querySelector('.main-navigation')
    mainNavigation?.classList.toggle('!hidden')
    setShowingHeader((s) => !s)
  }, [])

  return {
    isShowingHeader: isShowingHeader,
    toggleShowHeader: toggleShowHeader
  }
}

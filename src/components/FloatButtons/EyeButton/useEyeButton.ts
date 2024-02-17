// Hooks
import { useState, useCallback } from 'react'
import useFixPositionPage from './useFixPositionPage'

/**
 * Hook that implements the logic of the EyeButton component
 */
export default function useEyeButton() {
  const [isShowingHeader, setShowingHeader] = useState(true)
  const { handleFixPositionPage } = useFixPositionPage({ isShowingHeader: isShowingHeader })

  // Event click on button for show modal for create new action
  const toggleShowHeader = useCallback(() => {
    const mainNavigation = document.querySelector('.main-navigation')
    mainNavigation?.classList.toggle('!hidden')
    setShowingHeader((s) => {
      handleFixPositionPage({ isShowingHeader: !s })
      return !s
    })
  }, [])

  return {
    isShowingHeader: isShowingHeader,
    toggleShowHeader: toggleShowHeader
  }
}

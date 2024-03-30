// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useSmallDesktopScreen from '@hooks/screen/useSmallDesktopScreen'

// Dynamic Components
const Navigation = dynamic(() => import('./Navigation'))
const MobileNavigation = dynamic(() => import('./MobileNavigation'))

function MainNavigation() {
  const isSmallDesktopScreen = useSmallDesktopScreen()

  if (isSmallDesktopScreen) return <MobileNavigation />
  return <Navigation />
}

export default memo(MainNavigation)

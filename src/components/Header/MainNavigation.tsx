// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useMobileScreen from '@root/src/hooks/useSmallDesktopScreen'

// Dynamic Components
const Navigation = dynamic(() => import('./Navigation'))
const MobileNavigation = dynamic(() => import('./MobileNavigation'))

function MainNavigation() {
  const isMobileScreen = useMobileScreen()

  if (isMobileScreen) return <MobileNavigation />
  return <Navigation />
}

export default memo(MainNavigation)

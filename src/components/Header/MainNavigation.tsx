// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useMobile from '@hooks/useMobile'

// Dynamic Components
const Navigation = dynamic(() => import('./Navigation'))
const MobileNavigation = dynamic(() => import('./MobileNavigation'))

function MainNavigation() {
  const isMobile = useMobile()

  if (isMobile) return <MobileNavigation />
  return <Navigation />
}

export default memo(MainNavigation)

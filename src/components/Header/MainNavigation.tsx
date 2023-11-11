// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useMediaQuery from '@hooks/useMediaQuery'

// Constants
import { MEDIA_QUERY_FOR_MOBILE_DEVICES } from './constants'

// Dynamic Components
const Navigation = dynamic(() => import('./Navigation'))
const MobileNavigation = dynamic(() => import('./MobileNavigation'))

function MainNavigation() {
  const isMobile = useMediaQuery(MEDIA_QUERY_FOR_MOBILE_DEVICES)

  if (isMobile) return <MobileNavigation />
  return <Navigation />
}

export default memo(MainNavigation)

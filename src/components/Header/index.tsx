// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import { useMediaQuery } from '@hooks/useMediaQuery'
import { MEDIA_QUERY_FOR_DESKTOP_DEVICES } from './constants'

// Dynamic Components
const Welcome = dynamic(() => import('./Welcome'))
const Navigation = dynamic(() => import('./Navigation'))
const MobileNavigation = dynamic(() => import('./MobileNavigation'))
const HomeWelcomeTopWave = dynamic(() => import('@assets/waves/home-welcome-top-wave'))

function Header() {
  const isDesktioDevice = useMediaQuery(MEDIA_QUERY_FOR_DESKTOP_DEVICES)

  return (
    <header className="main-header relative overflow-hidden min-h-[300px] bg-pink-200">
      <div className="main-inner-header max-w-[1300px] mx-auto px-[3rem] relative z-[9999] overflow-hidden">
        <Welcome />
        {isDesktioDevice ? <Navigation /> : <MobileNavigation />}
      </div>

      <HomeWelcomeTopWave />
    </header>
  )
}

export default memo(Header)

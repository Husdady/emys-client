// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Dynamic Components
const Welcome = dynamic(() => import('./Welcome'))
const Navigation = dynamic(() => import('./Navigation'))
const HomeWelcomeTopWave = dynamic(() => import('@assets/waves/home-welcome-top-wave'))

function Header() {
  return (
    <header className="main-header relative overflow-hidden min-h-[300px] bg-pink-200">
      <div className="main-inner-header max-w-[1300px] mx-auto px-[3rem] relative z-[9999] overflow-hidden">
        <Navigation />
        <Welcome />
      </div>

      <HomeWelcomeTopWave />
    </header>
  )
}

export default memo(Header)

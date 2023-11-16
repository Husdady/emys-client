// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'
import useHeader from './useHeader'
import classnames from '@root/src/utils/classnames'

// Dynamic Components
const Welcome = dynamic(() => import('./Welcome'))
const MainNavigation = dynamic(() => import('./MainNavigation'))
const HomeWelcomeTopWave = dynamic(() => import('@assets/waves/home-welcome-top-wave'))
const HomeWelcomeBottomWave = dynamic(() => import('@assets/waves/home-welcome-bottom-wave'))

function Header() {
  const { isHomePath } = useHeader()

  return (
    <>
      <header
        className={classnames([
          'main-header relative overflow-hidden',
          isHomePath ? 'min-h-[300px] bg-pink-200' : null
        ])}
      >
        <div className="main-inner-header max-w-[1300px] mx-auto px-[3rem] relative z-[9999] overflow-hidden">
          {isHomePath && <Welcome />}
          <MainNavigation />
        </div>

        {isHomePath && <HomeWelcomeTopWave />}
      </header>

      {isHomePath && <HomeWelcomeBottomWave />}
    </>
  )
}

export default memo(Header)

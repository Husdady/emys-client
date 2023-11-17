// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Dynamic Components
const MainNavigation = dynamic(() => import('./MainNavigation'))

function Header() {
  return (
    <header className="main-header">
      <div className="main-inner-header relative z-[99999] overflow-hidden">
        <MainNavigation />
      </div>
    </header>
  )
}

export default memo(Header)

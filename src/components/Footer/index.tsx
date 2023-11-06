// React
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Lazy Components
const Sections = dynamic(() => import('./Sections'))
const Copyright = dynamic(() => import('./Copyright'))

function Footer() {
  return (
    <footer className="main-footer bg-black pt-[1.15rem]">
      <Sections />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)

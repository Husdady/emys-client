// React
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Dynamic Components
const Sections = dynamic(() => import('./Sections'))
const Copyright = dynamic(() => import('./Copyright'))

function Footer() {
  return (
    <footer className="main-footer bg-black pt-[1.15rem] overflow-hidden">
      <Sections />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)

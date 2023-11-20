// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

// Dynamic Components
const Header = dynamic(() => import('@components/Header'))
const Footer = dynamic(() => import('@components/Footer'))

function MainLayout({ children }: OnlyChildrenProp) {
  return (
    <section role="main" className="max-w-[1366px] mx-auto">
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default memo(MainLayout)

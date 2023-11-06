// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

// Utils
import classnames from '@utils/classnames'

// Assets
import { Lato, Lexend, Poppins } from '@assets/fonts'

// Lazy components
const Header = dynamic(() => import('@components/Header'))
const Footer = dynamic(() => import('@components/Footer'))

function MainLayout({ children }: OnlyChildrenProp) {
  return (
    <main role="main" className={classnames([Lato.className, Lexend.variable, Poppins.variable])}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default memo(MainLayout)

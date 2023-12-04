// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Interfaces
import { MainLayoutProps } from './interfaces'

// Dynamic Components
const Header = dynamic(() => import('@components/Header'))
const Footer = dynamic(() => import('@components/Footer'))
const FloatButtons = dynamic(() => import('@components/FloatButtons'))

function MainLayout({ children, isShowingFloatButtons = true }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      {isShowingFloatButtons && <FloatButtons />}
    </>
  )
}

export default memo(MainLayout)

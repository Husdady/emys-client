// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Interfaces
import { MainLayoutProps } from './interfaces'

// Dynamic Components
const Modal = dynamic(() => import('@components/Modal'))
const Header = dynamic(() => import('@components/Header'))
const Footer = dynamic(() => import('@components/Footer'))
const FloatButtons = dynamic(() => import('@components/FloatButtons'))

export default function MainLayout({ children, isShowingFloatButtons = true }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Modal />
      {isShowingFloatButtons && <FloatButtons />}
    </div>
  )
}

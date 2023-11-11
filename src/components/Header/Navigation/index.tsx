// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Images
import logo from '@assets/images/logo.webp'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))
const Login = dynamic(() => import('@assets/icons/login'))
const NavigationLinks = dynamic(() => import('./NavigationLinks'))

function Navigation() {
  return (
    <nav className="main-navigation max-h-[60px] top-[1.5rem] fixed max-w-[1104px] mx-auto left-0 right-0 navigation flex gap-x-[1.5rem] justify-between font-poppins bg-white shadow-xl rounded-full items-center py-1 ps-6 pe-4 z-[9999] overflow-y-hidden overflow-x-auto whitespace-nowrap">
      <div className="flex items-center gap-x-6">
        <Image
          priority
          width={65}
          height={80}
          src={logo.src}
          loading="eager"
          alt="logo-image"
        />

        <NavigationLinks />
      </div>

      <div>
        <Button
          icon={<Login size="sm" />}
          title="Iniciar sesión"
          titlePopup="Iniciar sesión en emys.pe"
          className="btn-login py-1.5 place-self-start bg-main-500 border-2 border-main-700 outline outline-1 outline-main-700 rounded-full text-white hover:bg-pink-500 hover:border-pink-700 hover:outline-pink-700"
        />
      </div>
    </nav>
  )
}

export default memo(Navigation)

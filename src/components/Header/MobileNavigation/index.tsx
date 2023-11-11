// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Images
import logo from '@assets/images/logo.webp'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))
const MenuDeep = dynamic(() => import('@assets/icons/menu-deep'))
const UserCircleSolid = dynamic(() => import('@assets/icons/user-circle-solid'))
// const NavigationLinks = dynamic(() => import('./NavigationLinks'))

function MobileNavigation() {
  return (
    <nav className="min-h-[60px] main-mobile-navigation top-0 sm:top-[1.5rem] fixed mx-auto left-0 right-0 navigation flex gap-x-[1.5rem] justify-between font-poppins bg-white shadow-xl items-center py-1 px-4 z-[9999] overflow-y-hidden overflow-x-auto whitespace-nowrap sm:max-w-[600px] sm:rounded-full sm:px-6">
      <div>
        <Button
          title=""
          icon={<MenuDeep size="xl" className='stroke-3' />}
          className="btn-menu active py-1.5 !px-2 rounded bg-stone-200 text-main-700"
        />
      </div>

      <Image
        priority
        width={60}
        height={50}
        src={logo.src}
        loading="eager"
        alt="logo-image"
        objectFit="cover"
        className="min-w-[60px] min-h-[50px]"
      />

      <UserCircleSolid size="xl" className="text-gray-600" />
    </nav>
  )
}

export default memo(MobileNavigation)

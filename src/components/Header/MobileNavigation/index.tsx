// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Components
import MagnifyingGlass from '@root/src/assets/icons/magnifying-glass'

// Images
import logo from '@assets/images/logo.webp'

// Dynamic Components
const Menu = dynamic(() => import('@assets/icons/menu'))
const Button = dynamic(() => import('@components/Button'))
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))
const UserCircleSolid = dynamic(() => import('@assets/icons/user-circle-solid'))

function MobileNavigation() {
  return (
    <nav className="min-h-[60px] main-mobile-navigation top-0 sm:top-[1.5rem] fixed mx-auto left-0 right-0 navigation flex gap-x-[1.5rem] justify-between font-poppins bg-white shadow-xl items-center py-1 pl-4 pr-2 z-[9999] overflow-y-hidden overflow-x-auto whitespace-nowrap sm:mx-[2rem] sm:max-w-[970px] lg:mx-auto sm:rounded-full sm:pl-6 sm:pr-3">
      <div className="flex items-center gap-x-5">
        <Button
          title=""
          icon={<Menu size="xl" className="stroke-3" />}
          className="btn-menu active py-1.5 !px-2 rounded bg-[#eeeeee] text-main-700"
        />

        <SwitchTheme />
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

      <div className="flex items-center">
        <Button
          title=""
          icon={<MagnifyingGlass size="smd" className="text-gray-600" />}
          className="btn-search-navigation-links py-3 bg-transparent !px-3"
        />

        <Button
          title=""
          className="btn-auth py-2.5 bg-transparent !px-3"
          icon={<UserCircleSolid size="xl" className="text-gray-600" />}
        />
      </div>
    </nav>
  )
}

export default memo(MobileNavigation)

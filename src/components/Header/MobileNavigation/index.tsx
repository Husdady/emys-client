// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Components
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Hooks
import useTheme from '@hooks/useTheme'

// Constants
import { HOME_PATH } from '@assets/paths'

// Images
import logo from '@assets/images/logo.webp'
import logoDark from '@assets/images/logo-dark.webp'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))
const Menu = dynamic(() => import('@assets/icons/menu'))
const Button = dynamic(() => import('@components/Button'))
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))
const UserCircleSolid = dynamic(() => import('@assets/icons/user-circle-solid'))

function MobileNavigation() {
  const { isLightTheme } = useTheme()

  return (
    <nav className="min-h-[60px] main-mobile-navigation top-0 sm:top-[1.5rem] fixed mx-auto left-0 right-0 navigation flex gap-x-[1.5rem] justify-between font-poppins bg-white shadow-xl items-center py-1 pl-4 pr-[0.3rem] z-[9999] overflow-y-hidden overflow-x-auto whitespace-nowrap sm:mx-[2rem] sm:max-w-[970px] lg:mx-auto sm:rounded-full sm:pl-6 sm:pr-[0.55rem] dark:bg-black border-b border-gray-200 dark:border-gray-600 sm:border-none">
      <div className="flex items-center gap-x-5">
        <Button
          title=""
          icon={<Menu size="xl" className="stroke-3" />}
          className="btn-menu scale py-1.5 !px-2 rounded bg-gray-200 text-main-700 dark:bg-gray-700 dark:text-main-200"
        />

        <SwitchTheme />
      </div>

      <Link href={HOME_PATH}>
        <Image
          priority
          width={60}
          height={50}
          loading="eager"
          alt="logo-image"
          className="min-w-[60px] min-h-[50px]"
          src={isLightTheme ? logo.src : logoDark.src}
        />
      </Link>

      <div className="flex items-center">
        <Button
          title=""
          icon={<MagnifyingGlass size="smd" />}
          className="btn-search-navigation-links py-3 bg-transparent !px-3 text-gray-600 dark:text-gray-400"
        />

        <Button
          title=""
          icon={<UserCircleSolid size="xl" />}
          className="btn-auth py-2.5 bg-transparent !px-3 text-gray-600 dark:text-gray-400"
        />
      </div>
    </nav>
  )
}

export default memo(MobileNavigation)

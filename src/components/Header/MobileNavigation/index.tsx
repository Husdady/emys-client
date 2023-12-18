// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Components
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Hooks
import useMobileNavigation from './useMobileNavigation'

// Constants
import { HOME_PATH } from '@assets/data/paths'

// Images
import logo from '@assets/images/logo.webp'
import logoDark from '@assets/images/logo-dark.webp'

// Dynamic Components
const User = dynamic(() => import('./User'))
const MenuIcon = dynamic(() => import('./MenuIcon'))
const Link = dynamic(() => import('@components/Link'))
const FloatMenu = dynamic(() => import('./FloatMenu'))
const Button = dynamic(() => import('@components/Button'))
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))
const ContactButton = dynamic(() => import('@components/FloatButtons/ContactButton'))
const WhatsappButton = dynamic(() => import('@components/FloatButtons/WhatsappButton'))

function MobileNavigation() {
  const { isLightTheme, customQueries, showQuickSearchModal, ...menuLeftData } =
    useMobileNavigation()

  return (
    <>
      <nav className="min-h-[60px] overflow-hidden main-mobile-navigation top-0 sm:top-[1.5rem] fixed mx-auto left-0 right-0 navigation flex gap-x-[1.5rem] justify-between font-poppins bg-white shadow-xl items-center py-1 pl-4 pr-[0.15rem] sm:pr-[0.3rem] z-[9999] whitespace-nowrap sm:mx-[2rem] sm:max-w-[970px] lg:mx-auto sm:rounded-full sm:pl-6 sm:pr-[0.55rem] dark:bg-black border-b border-gray-200 dark:border-gray-600 sm:border-none">
        <div className="flex items-center gap-x-5">
          <MenuIcon {...menuLeftData} />
          {!customQueries.isXsMobileDevice && <SwitchTheme />}
        </div>

        {!customQueries.isSmallMobileDevice && <div className="empty"></div>}

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
          {!customQueries.isXsMobileDevice && (
            <Button
              title=""
              onClick={showQuickSearchModal}
              icon={<MagnifyingGlass size="smd" />}
              className="btn-search-navigation-links py-3 bg-transparent !px-3 text-gray-600 dark:text-gray-400"
            />
          )}

          {!customQueries.isSmallMobileDevice && (
            <>
              <ContactButton className="mx-2" />
              <WhatsappButton className="mx-2" />
            </>
          )}

          <User />
        </div>
      </nav>

      <FloatMenu {...menuLeftData} />
    </>
  )
}

export default memo(MobileNavigation)

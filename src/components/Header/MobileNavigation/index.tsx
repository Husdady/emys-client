// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Hooks
import useMobileNavigation from './useMobileNavigation'

// Dynamic Components
const MenuIcon = dynamic(() => import('./MenuIcon'))
const FloatMenu = dynamic(() => import('./FloatMenu'))
const Button = dynamic(() => import('@components/Button'))
const User = dynamic(() => import('@components/Header/User'))
const AppLogo = dynamic(() => import('@components/Header/AppLogo'))
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))
const ContactButton = dynamic(() => import('@root/src/components/FloatButtons/ContactButton'))
const WhatsappButton = dynamic(() => import('@root/src/components/FloatButtons/WhatsappButton'))

function MobileNavigation() {
  const { customQueries, showQuickSearchModal, menuData, userMenuData } = useMobileNavigation()

  return (
    <>
      <nav className="min-h-[60px] overflow-hidden main-mobile-navigation top-0 md:top-[1.5rem] fixed mx-auto left-0 right-0 navigation flex gap-x-[1.5rem] justify-between font-poppins bg-white shadow-xl items-center py-1 pl-4 pr-[0.15rem] md:pr-[0.3rem] z-[999999] whitespace-nowrap md:mx-[2rem] md:max-w-[970px] lg:mx-auto md:rounded-full md:pl-6 md:pr-[0.55rem] dark:bg-black border-b border-gray-200 dark:border-gray-600 md:border">
        <div className="flex items-center gap-x-5">
          <MenuIcon {...menuData} />
          {!customQueries.isXsMobileDevice && <SwitchTheme />}
        </div>

        {!customQueries.isSmallMobileDevice && <div className="empty"></div>}

        <AppLogo width={60} height={50} className="min-w-[60px] min-h-[50px] sm:mr-4" />

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

          <User menuData={userMenuData} />
        </div>
      </nav>

      <FloatMenu {...menuData} />
    </>
  )
}

export default memo(MobileNavigation)

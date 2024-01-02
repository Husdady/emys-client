// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useNavigation from './useNavigation'

// Dynamic Components
const SessionButton = dynamic(() => import('./SessionButton'))
const NavigationLinks = dynamic(() => import('./NavigationLinks'))
const UserAuthenticated = dynamic(() => import('./UserAuthenticated'))
const AppLogo = dynamic(() => import('@components/Header/AppLogo'))

function Navigation() {
  const { navRef, isAuthenticated } = useNavigation()

  return (
    <nav
      ref={navRef}
      className="animate__animated animate__slideInDown main-navigation pe-4 max-h-[60px] top-[1.5rem] fixed max-w-[1104px] mx-auto left-0 right-0 navigation flex gap-x-[0.85rem] justify-between font-poppins bg-white shadow-xl rounded-full items-center py-1 ps-6 z-[9999] overflow-y-hidden overflow-x-auto whitespace-nowrap dark:bg-black dark:shadow-gray-600 border border-gray-200 dark:border-gray-500"
    >
      <div className="flex items-center gap-x-6">
        <AppLogo width={65} height={80} className="min-w-[65px]" />
        <NavigationLinks />
      </div>

      {!isAuthenticated && <SessionButton />}
      {isAuthenticated && <UserAuthenticated />}
    </nav>
  )
}

export default memo(Navigation)

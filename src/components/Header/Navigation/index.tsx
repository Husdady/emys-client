// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useAuth from '@hooks/useAuth'
import classnames from '@root/src/utils/classnames'

// Dynamic Components
const SessionButton = dynamic(() => import('./SessionButton'))
const NavigationLinks = dynamic(() => import('./NavigationLinks'))
const UserAuthenticated = dynamic(() => import('./UserAuthenticated'))
const AppLogo = dynamic(() => import('@components/Header/AppLogo'))

function Navigation() {
  const { isAuthenticated } = useAuth()

  return (
    <nav
      className={classnames([
        'main-navigation pe-4 max-h-[60px] top-[1.5rem] fixed max-w-[1104px] mx-auto left-0 right-0 navigation flex gap-x-[0.85rem] justify-between font-poppins bg-white shadow-xl rounded-full items-center py-1 ps-6 z-[9999] overflow-y-hidden overflow-x-auto whitespace-nowrap dark:bg-black dark:shadow-gray-600'
      ])}
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

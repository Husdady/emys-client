// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Hooks
import useNavigation from './useNavigation'

// Constants
import { LOGIN_PATH } from '@assets/data/paths'

// Images
import logo from '@assets/images/logo.webp'
import logoDark from '@assets/images/logo-dark.webp'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))
const Login = dynamic(() => import('@assets/icons/login'))
const Button = dynamic(() => import('@components/Button'))
const NavigationLinks = dynamic(() => import('./NavigationLinks'))

function Navigation() {
  const { pathname, isLightTheme } = useNavigation()

  return (
    <nav className="main-navigation max-h-[60px] top-[1.5rem] fixed max-w-[1104px] mx-auto left-0 right-0 navigation flex gap-x-[1.5rem] justify-between font-poppins bg-white shadow-xl rounded-full items-center py-1 ps-6 pe-4 z-[9999] overflow-y-hidden overflow-x-auto whitespace-nowrap dark:bg-black dark:shadow-gray-600">
      <div className="flex items-center gap-x-6">
        <Image
          priority
          width={65}
          height={80}
          loading="eager"
          alt="logo-image"
          src={isLightTheme ? logo.src : logoDark}
        />

        <NavigationLinks />
      </div>

      <div>
        {pathname !== LOGIN_PATH && (
          <Link
            href={LOGIN_PATH}
            title="Iniciar sesión en emys.pe"
            className="min-w-[162px] max-h-[34px] gap-x-2 flex items-center justify-center btn-login !py-1.5 bg-main-500 hover:text-pink-900 border-2 border-pink-600 outline outline-[0.15rem] dark:outline-[0.1rem] hover:font-semibold outline-offset-2 outline-rose-300/60 rounded-full text-white hover:bg-pink-100 hover:border-rose-800 hover:outline-gray-300 hover:outline-[0.12rem] dark:border-pink-300 dark:outline-pink-200 dark:bg-rose-200 dark:hover:bg-pink-300 dark:hover:border-pink-100 dark:!text-rose-900 dark:font-semibold"
          >
            <Login size="sm" />
            <span>Iniciar sesión</span>
          </Link>
        )}

        {pathname === LOGIN_PATH && (
          <Button
            disabled
            title="Iniciar sesión"
            icon={<Login size="sm" />}
            customTitle={{ className: 'dark:font-semibold' }}
            className="gap-x-2 flex items-center justify-center btn-login !py-1.5 bg-main-500 border-2 border-main-700 outline outline-[0.1rem] outline-offset-2 outline-main-700 rounded-full text-white dark:border-pink-300 dark:outline-pink-200 dark:bg-rose-200 dark:!text-rose-900"
          />
        )}
      </div>
    </nav>
  )
}

export default memo(Navigation)

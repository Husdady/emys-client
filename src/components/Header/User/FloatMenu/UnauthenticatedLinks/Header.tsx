// Librarys
import dynamic from 'next/dynamic'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Dynamic Components
const AppLogo = dynamic(() => import('@components/Header/AppLogo'))
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))
const MenuIcon = dynamic(() => import('@components/Header/MobileNavigation/MenuIcon'))

export default function Header(props: MenuData) {
  return (
    <div className="flex items-center justify-between gap-x-6 border-b border-gray-300 dark:border-gray-600 py-1.5 sm:py-0.5 pl-4 pr-2 sm:pr-1">
      <div className="flex items-center gap-x-4">
        <AppLogo width={60} height={80} className="min-w-[60px] min-h-[50px]" />
        <SwitchTheme />
      </div>

      <div className="flex items-center justify-end">
        <span className="hide-menu-text text-gray-400 max-w-[70px] break-word whitespace-normal text-center leading-tight text-[0.75rem] sm:text-[0.85rem]">
          Ocultar menú
        </span>

        <MenuIcon {...props} />
      </div>
    </div>
  )
}

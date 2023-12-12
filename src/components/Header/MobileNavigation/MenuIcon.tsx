// Librarys
import { memo } from 'react'

// Components
import X from '@assets/icons/x'
import Menu from '@assets/icons/menu'

// Inerfaces
import { MenuLeftData } from './useMobileNavigation/interfaces'

export const SHARED_MENU_CLASSNAME =
  'btn-menu scale py-1.5 !px-2 rounded bg-gray-200 text-main-700 dark:bg-gray-700/80 dark:text-main-200'

function MenuIcon({ toggleMenu, isShowingMenu }: MenuLeftData) {
  return (
    <>
      {isShowingMenu && <X size="xl" onClick={toggleMenu} className={SHARED_MENU_CLASSNAME} />}
      {!isShowingMenu && <Menu size="xl" onClick={toggleMenu} className={SHARED_MENU_CLASSNAME} />}
    </>
  )
}

export default memo(MenuIcon, (prevProps, nextProps) => {
  return prevProps.isShowingMenu === nextProps.isShowingMenu
})

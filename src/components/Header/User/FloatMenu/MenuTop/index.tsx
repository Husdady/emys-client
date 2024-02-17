// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import X from '@assets/icons/x'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Dynamic Components
const UserProfilePhoto = dynamic(() => import('./UserProfilePhoto'))
const UserFullnameAndEmail = dynamic(() => import('./UserFullnameAndEmail'))

function MenuTop({ hideMenu }: MenuData) {
  return (
    <div className="menu-header flex items-center justify-between p-3.5 gap-x-4 overflow-y-hidden overflow-x-auto border-b-2 border-gray-300/30 dark:border-gray-700/90 dark:bg-gray-900">
      <div className="wrapper-profile-photo flex items-center gap-x-2 truncate">
        <UserProfilePhoto />
        <UserFullnameAndEmail />
      </div>

      <X
        size="xl"
        onClick={hideMenu}
        className="p-2 cursor-pointer toggle-menu rounded stroke-3 bg-gray-200/70 text-main-700 dark:bg-gray-700/70 dark:text-main-200 hover:bg-gray-200 dark:hover:bg-gray-700"
      />
    </div>
  )
}

export default memo(MenuTop, (prevProps, nextProps) => {
  return prevProps.hideMenu === nextProps.hideMenu
})

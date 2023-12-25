// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Dynamic Components
const HeaderIcon = dynamic(() => import('./HeaderIcon'))
const UserProfilePhoto = dynamic(() => import('./UserProfilePhoto'))
const UserFullnameAndEmail = dynamic(() => import('./UserFullnameAndEmail'))

function MenuTop(props: MenuData) {
  return (
    <div className="menu-header flex items-center justify-between py-5 px-4 sm:px-5 gap-x-4 overflow-y-hidden overflow-x-auto border-b-2 border-gray-300/30 dark:border-gray-700/90 dark:bg-gray-900">
      <div className="wrapper-profile-photo flex items-center gap-x-3">
        <UserProfilePhoto />
        <UserFullnameAndEmail />
      </div>

      <HeaderIcon {...props} />
    </div>
  )
}

export default memo(MenuTop, (prevProps, nextProps) => {
  return prevProps.isShowingMenu === nextProps.isShowingMenu
})

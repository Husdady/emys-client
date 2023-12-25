// Librarys
import { memo } from 'react'

// Components
import X from '@assets/icons/x'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

function HeaderIcon({ hideMenu }: MenuData) {
  return (
    <X
      size="xl"
      onClick={hideMenu}
      className="p-2 toggle-menu rounded stroke-3 bg-gray-200/70 text-main-700 dark:bg-gray-700/70 dark:text-main-200"
    />
  )
}

export default memo(HeaderIcon, (prevProps, nextProps) => {
  return prevProps.hideMenu === nextProps.hideMenu
})

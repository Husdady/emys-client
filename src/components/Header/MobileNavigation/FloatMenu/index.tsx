// Librarys
import dynamic from 'next/dynamic'

// Interfaces
import { MenuLeftData } from '@components/Header/MobileNavigation/useMobileNavigation/interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const MenuBottom = dynamic(() => import('./MenuBottom'))
const MenuContent = dynamic(() => import('./MenuContent'))

export default function FloatMenu(props: MenuLeftData) {
  return (
    <div
      className={classnames([
        props.isShowingMenu ? null : 'hidden',
        'float-menu sm:max-w-[970px] top-[60px] sm:top-[6rem] sm:rounded-xl sm:mx-[2rem] dark:sm:shadow-gray-700 fixed left-0 right-0 bg-white shadow-xl dark:bg-black border-b border-gray-200 dark:border-gray-600 sm:border-none h-[calc(100%-60px] flex flex-col'
      ])}
    >
      <MenuContent {...props} />
      <MenuBottom />
    </div>
  )
}

// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useAuth from '@hooks/useAuth'

// Interfaces
import { MenuData } from '@components/Header/MobileNavigation/useMobileNavigation/interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const MenuContent = dynamic(() => import('./MenuContent'))
const MenuBottom = dynamic(() => import('@components/Header/User/FloatMenu/MenuBottom'))

export default function FloatMenu(props: MenuData) {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <div
        className={classnames([
          props.isShowingMenu ? null : 'hidden',
          'float-menu z-[999999] md:max-w-[450px] top-[60px] md:top-[5.5rem] md:rounded-lg md:mx-[2rem] dark:md:shadow-gray-700 fixed left-0 right-0 bg-white shadow-xl dark:bg-black border-b border-gray-200 dark:border-gray-600 md:border-none h-[calc(100%-60px)] flex flex-col md:h-[calc(100%-100px)]'
        ])}
      >
        <MenuContent {...props} />
        {isAuthenticated && <MenuBottom />}
      </div>

      {props.isShowingMenu && (
        <div
          onClick={props.hideMenu}
          className="top-0 w-full h-full fixed !z-[999] ant-modal-mask hidden md:block"
        ></div>
      )}
    </>
  )
}

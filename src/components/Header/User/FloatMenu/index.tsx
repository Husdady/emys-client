// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useAuth from '@hooks/useAuth'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Utils
import classnames from '@utils/classnames'

// Data
import pk from '@root/package.json'

// Dynamic Components
const MenuTop = dynamic(() => import('./MenuTop'))
const MenuBottom = dynamic(() => import('./MenuBottom'))
const UnauthenticatedLinks = dynamic(() => import('./UnauthenticatedLinks'))

export default function FloatMenu(props: MenuData) {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <div
        className={classnames([
          props.isShowingMenu ? null : 'hidden',
          'float-menu h-[100vh] unauthenticated-links z-[999999] max-w-[350px] top-0 md:top-[5.5rem] md:rounded-lg md:mx-[2rem] dark:md:shadow-gray-700 fixed right-0 bg-white shadow-xl dark:bg-black border-b border-gray-200 dark:border-gray-600 md:border-none flex flex-col md:h-[calc(100%-100px)] flex flex-col justify-between'
        ])}
      >
        <div>
          {isAuthenticated && <MenuTop {...props} />}
          {!isAuthenticated && <UnauthenticatedLinks {...props} />}
        </div>

        <div>
          <span className="mb-2 mx-4 block text-center text-[0.7rem] text-gray-400 sm:text-[0.8rem]">
            Version {pk.version}
          </span>
          {isAuthenticated && <MenuBottom />}
        </div>
      </div>

      {props.isShowingMenu && (
        <div
          onClick={props.hideMenu}
          className="w-full h-full fixed top-0 left-0 !z-[999] ant-modal-mask"
        ></div>
      )}
    </>
  )
}

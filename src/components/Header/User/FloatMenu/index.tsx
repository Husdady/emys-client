// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useAuth from '@hooks/useAuth'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const MenuTop = dynamic(() => import('./MenuTop'))
const AppVersion = dynamic(() => import('./AppVersion'))
const MenuBottom = dynamic(() => import('./MenuBottom'))
const AuthenticatedLinks = dynamic(() => import('./AuthenticatedLinks'))
const UnauthenticatedLinks = dynamic(() => import('./UnauthenticatedLinks'))

export default function FloatMenu(props: MenuData) {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <div
        className={classnames([
          props.isShowingMenu ? null : 'hidden',
          'float-menu overflow-y-auto h-[calc(100%-60px)] unauthenticated-links z-[999999] max-w-[300px] top-[60px] md:top-[5.5rem] md:rounded-lg md:mx-[2rem] dark:md:shadow-gray-700 fixed right-0 bg-white shadow-xl dark:bg-black border-b border-gray-200 dark:border-gray-600 md:border-none flex flex-col md:h-[calc(100%-100px)] flex flex-col justify-between'
        ])}
      >
        <div>
          {isAuthenticated && <MenuTop {...props} />}
          {isAuthenticated && <AuthenticatedLinks {...props} />}
          {!isAuthenticated && <UnauthenticatedLinks {...props} />}
        </div>

        <div>
          {isAuthenticated && <MenuBottom />}

          <AppVersion
            className={classnames([
              isAuthenticated ? 'border-t-2 border-gray-300 dark:border-gray-700 pt-2' : "mt-8"
            ])}
          />
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

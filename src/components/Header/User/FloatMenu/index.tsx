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
    <div>
      <div
        className={classnames([
          props.isShowingMenu ? null : 'hidden',
          'float-menu overflow-y-auto h-full top-0 md:max-h-[455px] unauthenticated-links z-[999999] max-w-[300px] md:top-[5.5rem] md:rounded-lg md:mx-[2rem] dark:md:shadow-gray-700 fixed right-0 bg-white shadow-xl dark:bg-black border-b border-gray-200 dark:border-gray-600 md:border-none flex flex-col md:h-[calc(100%-100px)] flex flex-col justify-between'
        ])}
      >
        <div>
          {isAuthenticated && <MenuTop {...props} />}
          {isAuthenticated && <AuthenticatedLinks {...props} />}
          {!isAuthenticated && <UnauthenticatedLinks {...props} />}
        </div>

        <div>
          {isAuthenticated && (
            <>
              <MenuBottom />
              <hr className="h-[2px] border-none bg-gray-300/30 dark:bg-gray-600" />
            </>
          )}

          <AppVersion className={classnames([isAuthenticated ? 'pt-2' : 'mt-8'])} />
        </div>
      </div>

      {props.isShowingMenu && (
        <div
          onClick={props.hideMenu}
          className="w-full h-full fixed top-0 left-0 !z-[99999] ant-modal-mask"
        ></div>
      )}
    </div>
  )
}

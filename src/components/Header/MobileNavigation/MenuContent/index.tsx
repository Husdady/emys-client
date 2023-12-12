// Librarys
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useMenuContent from './useMenuContent'

// Interfaces
import { MenuLeftData } from '@components/Header/MobileNavigation/useMobileNavigation/interfaces'

// Data
import navigation from '@assets/navigation'
import classnames from '@root/src/utils/classnames'

// Dynamic Components
const NavigationItem = dynamic(() => import('./NavigationItem'))
const NavigationSearch = dynamic(() => import('./NavigationSearch'))

export default function MenuContent(props: MenuLeftData) {
  const { navigationRef } = useMenuContent()

  return (
    <section
      ref={navigationRef}
      className={classnames([
        props.isShowingMenu ? null : 'hidden',
        'navigation mobile-menu-content overflow-y-auto sm:max-w-[640px] top-[60px] sm:top-[6rem] sm:rounded-xl dark:sm:shadow-gray-700 fixed mx-auto left-0 right-0 bg-white shadow-xl dark:bg-black border-b border-gray-200 dark:border-gray-600 sm:border-none'
      ])}
    >
      <h6 className="navigation-title text-[0.76rem] mt-4 ml-4 mr-5 sm:ml-5 sm:mr-6 font-bold uppercase font-lato tracking-wider text-main-700 dark:text-main-200">
        Búsqueda de navegación
      </h6>

      <NavigationSearch />

      {navigation.map((item, i: number) => {
        return (
          <Fragment key={i}>
            <h6 className="navigation-title text-[0.76rem] mt-4 ml-4 mr-5 sm:ml-5 sm:mr-6 mb-2 font-bold uppercase font-lato tracking-wider text-main-700 dark:text-main-200">
              {item.navigationTitle}
            </h6>

            <ul className="navigation-list">
              {item.navigationItems.map((navigationItem, k) => (
                <NavigationItem key={k} {...navigationItem} menuLeftData={props} />
              ))}
            </ul>
          </Fragment>
        )
      })}
    </section>
  )
}

// Librarys
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import useMenuContent from './useMenuContent'

// Interfaces
import { MenuLeftData } from '@components/Header/MobileNavigation/useMobileNavigation/interfaces'

// Data
import navigation from '@assets/navigation'

// Dynamic Components
const NavigationItem = dynamic(() => import('./NavigationItem'))
const NavigationSearch = dynamic(() => import('./NavigationSearch'))

export default function MenuContent(props: MenuLeftData) {
  const { navigationRef } = useMenuContent()

  return (
    <section ref={navigationRef} className="navigation mobile-menu-content overflow-y-auto sm:mt-[0.15rem] sm:mr-[0.21rem] overflow-x-hidden h-[calc(100vh-180px)]">
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

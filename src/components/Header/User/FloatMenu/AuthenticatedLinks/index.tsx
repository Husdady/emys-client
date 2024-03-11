// Librarys
import dynamic from 'next/dynamic'

// Components
import BoxSeam from '@components/Icons/BoxSeam'
import Settings from '@components/Icons/Settings'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Data
import { ACCOUNT_PATH, FAVORITE_PRODUCTS_PATH } from '@data/paths'

// Dynamic Components
const SwitchTheme = dynamic(() => import('./SwitchTheme'))
const UpdateProfilePhoto = dynamic(() => import('./UpdateProfilePhoto'))
const NavigationItem = dynamic(() => import('@components/Header/User/FloatMenu/NavigationItem'))

export default function UnauthenticatedLinks(props: MenuData) {
  return (
    <section className="navigation mobile-menu-content overflow-y-auto overflow-x-hidden">
      <h6 className="navigation-title text-[0.76rem] mt-4 ml-4 mr-5 sm:ml-5 sm:mr-6 mb-2 font-bold uppercase font-lato tracking-wider text-main-700 dark:text-pink-300">
        Acciones
      </h6>

      <NavigationItem
        icon={<Settings />}
        title="Administrar mi Cuenta"
        path={ACCOUNT_PATH}
        menuData={props}
      />

      <NavigationItem
        icon={<BoxSeam />}
        title="Ver mis Productos favoritos"
        path={FAVORITE_PRODUCTS_PATH}
        menuData={props}
      />

      <UpdateProfilePhoto {...props} />
      <SwitchTheme />
    </section>
  )
}

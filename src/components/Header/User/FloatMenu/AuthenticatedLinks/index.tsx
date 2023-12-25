// Librarys
import dynamic from 'next/dynamic'

// Components
import Settings from '@assets/icons/settings'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Data
import { ACCOUNT_PATH } from '@assets/data/paths'

// Dynamic Components
const NavigationItem = dynamic(() => import('@components/Header/User/FloatMenu/NavigationItem'))

export default function UnauthenticatedLinks(props: MenuData) {
  return (
    <section className="navigation mobile-menu-content overflow-y-auto overflow-x-hidden">
      <NavigationItem
        icon={<Settings />}
        title="Administrar mi Cuenta"
        path={ACCOUNT_PATH}
        menuData={props}
      />
    </section>
  )
}

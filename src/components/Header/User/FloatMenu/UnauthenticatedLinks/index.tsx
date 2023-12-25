// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useMenuContent from './useMenuContent'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Data
import { CONTACT_PATH } from '@assets/data/paths'
import navigation from '@assets/navigation/unauthenticated.navigation'

// Dynamic Components
const Header = dynamic(() => import('./Header'))
const Link = dynamic(() => import('@components/Link'))
const NavigationItem = dynamic(() => import('./NavigationItem'))

export default function MenuContent(props: MenuData) {
  const { navigationRef } = useMenuContent()

  return (
    <section
      ref={navigationRef}
      className="navigation mobile-menu-content overflow-y-auto sm:mt-[0.15rem] sm:mr-[0.21rem] overflow-x-hidden"
    >
      <Header {...props} />

      {navigation.map((item, i: number) => {
        return (
          <ul key={i} className="navigation-list">
            {item.navigationItems.map((navigationItem, k) => (
              <NavigationItem key={k} {...navigationItem} menuData={props} />
            ))}
          </ul>
        )
      })}

      <Link href={CONTACT_PATH} className="text-blue-500 underline text-center mx-4 mt-5 block">
        ¿Necesitas ayuda?
      </Link>
    </section>
  )
}

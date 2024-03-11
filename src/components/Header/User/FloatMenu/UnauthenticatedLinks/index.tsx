// Librarys
import dynamic from 'next/dynamic'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Data
import { CONTACT_PATH } from '@data/paths'
import navigation from '@data/navigation/links/unauthenticated'

// Dynamic Components
const Header = dynamic(() => import('./Header'))
const Link = dynamic(() => import('@components/Link'))
const NavigationItem = dynamic(() => import('@components/Header/User/FloatMenu/NavigationItem'))

export default function UnauthenticatedLinks(props: MenuData) {
  return (
    <section className="navigation mobile-menu-content sm:mr-[0.21rem] overflow-x-hidden">
      <Header {...props} />

      {navigation.map((item, i: number) => {
        return (
          <ul key={i} className="navigation-list">
            {item.navigationItems.map((navigationItem, k) => (
              <li
                key={k}
                className="navigation-list-item border-b border-gray-300 dark:border-gray-600"
              >
                <NavigationItem {...navigationItem} menuData={props} />
              </li>
            ))}
          </ul>
        )
      })}

      <Link
        href={CONTACT_PATH}
        className="text-blue-500 underline text-center mx-4 mt-5 block dark:text-sky-300"
      >
        ¿Necesitas ayuda?
      </Link>
    </section>
  )
}

// Librarys
import { Suspense } from 'react'
// import { NavLink } from 'react-router-dom'

// Components
import ChevronRight from '@assets/icons/chevron-right'

// Interfaces
import { NavigationItemProps } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Utils
import classnames from '@utils/classnames'
import { toggleMenu } from '@modules/Dashboard/components/MenuLeft/utils'

export default function NavigationItem({ icon, path, title }: NavigationItemProps) {
  return (
    <li className="navigation-list-item pl-1">
      <NavLink
        end
        to={path}
        onClick={toggleMenu}
        className={({ isActive }) =>
          classnames([
            isActive
              ? 'pointer-events-none bg-main-700/10 text-main-700 !border-main-700 dark:bg-main-200/30 dark:text-pink-200 dark:!border-main-200'
              : 'dark:text-gray-200',
            'navigation-list-item-link flex items-center justify-between border-l-[5px] border-transparent py-4 pl-[1.15rem] pr-3 font-semibold tracking-wide md:hover:bg-main-700/10 md:hover:text-main-700 dark:!font-normal dark:md:hover:!font-normal dark:md:hover:bg-main-200/30 dark:md:hover:text-pink-200'
          ])
        }
      >
        <div className="inner flex items-center gap-x-2">
          {icon}

          <span className="font-poppins capitalize text-[0.84rem] lg:leading-snug">{title}</span>
        </div>

        <Suspense fallback={null}>
          <ChevronRight size="smaller" className="chevron-right dark:text-gray-200" />
        </Suspense>
      </NavLink>
    </li>
  )
}

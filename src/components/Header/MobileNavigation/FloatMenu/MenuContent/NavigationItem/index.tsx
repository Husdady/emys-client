// Components
import ChevronRight from '@assets/icons/chevron-right'

// Hooks
import { useRouter } from 'next/router'

// Interfaces
import { NavigationItemProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
import Link from '@components/Link'

export default function NavigationItem({ icon, path, title, menuLeftData }: NavigationItemProps) {
  const router = useRouter()

  return (
    <li className="navigation-list-item pl-1">
      <Link
        href={path}
        onClick={menuLeftData?.toggleMenu}
        className={classnames([
          router.pathname === path
            ? 'pointer-events-none bg-main-700/10 text-main-700 !border-main-700 dark:bg-main-200/30 dark:text-pink-200 dark:!border-main-200'
            : 'dark:text-gray-200',
          'navigation-list-item-link flex items-center gap-x-5 justify-between border-l-[5px] border-transparent py-3.5 px-3 font-semibold tracking-wide md:hover:bg-main-700/10 md:hover:text-main-700 dark:!font-normal dark:md:hover:!font-normal dark:md:hover:bg-main-200/30 dark:md:hover:text-pink-200'
        ])}
      >
        <div className="inner flex items-center gap-x-2">
          {icon}

          <span className="font-poppins text-[0.84rem] lg:leading-snug break-word">{title}</span>
        </div>

        <ChevronRight size="smaller" className="chevron-right dark:text-gray-200 stroke-4" />
      </Link>
    </li>
  )
}

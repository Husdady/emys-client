// Librarys
import dynamic from 'next/dynamic'

// Hooks
import { useRouter } from 'next/router'

// Interfaces
import { NavigationItemProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function NavigationItem({
  icon,
  path,
  title,
  menuData,
  className
}: NavigationItemProps) {
  const router = useRouter()

  return (
    <Link
      href={path}
      onClick={menuData?.hideMenu}
      className={classnames([
        className,
        router.pathname === path
          ? 'bg-main-700/10 text-main-700 !border-main-700 dark:bg-main-200/30 dark:text-pink-200 dark:!border-main-200'
          : 'dark:text-gray-200',
        'navigation-list-item-link flex items-center border-l-[5px] border-transparent py-3.5 sm:py-3 px-3 font-semibold tracking-wide md:hover:bg-main-700/10 md:hover:text-main-700 dark:!font-normal dark:md:hover:!font-normal dark:md:hover:bg-main-200/30 dark:md:hover:text-pink-200 whitespace-normal'
      ])}
    >
      <div className="inner flex items-center gap-x-2">
        {icon}

        <span className="font-poppins text-[0.84rem] lg:leading-snug break-word">{title}</span>
      </div>
    </Link>
  )
}

// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Hooks
import { useRouter } from 'next/router'

// Interfaces
import { NavigationLinkProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

function NavigationLink({ href, icon, text }: NavigationLinkProps) {
  const router = useRouter()

  return (
    <li className="navigation-link">
      <Link
        href={href}
        className={classnames([
          router.pathname === href ? 'bg-main-700/10 dark:bg-pink-200/30 !cursor-default' : null,
          'hover:bg-main-700/10 px-3 py-2 flex items-center gap-x-1 rounded dark:hover:bg-pink-200/30'
        ])}
      >
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default memo(NavigationLink)

// Librarys
import { memo } from 'react'
import Link from 'next/link'

// Hooks
import { useRouter } from 'next/router'

// Interfaces
import { NavigationLinkProps } from './interfaces'
import classnames from '@root/src/utils/classnames'

function NavigationLink({ href, icon, text }: NavigationLinkProps) {
  const router = useRouter()

  return (
    <li className="navigation-link">
      <Link
        href={href}
        className={classnames([
          router.pathname === href ? 'bg-main-700/10 !cursor-default' : null,
          'hover:bg-main-700/10 px-3 py-2 flex items-center gap-x-1 rounded'
        ])}
      >
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default memo(NavigationLink)

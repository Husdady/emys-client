// Librarys
import { memo } from 'react'
import { createId } from '@libs/nanoid'
import dynamic from 'next/dynamic'

// Constants
import navigation from './navigation'

// Dynamic Components
const NavigationLink = dynamic(() => import('./NavigationLink'))

function NavigationLinks() {
  return (
    <ul className="navigation-links flex text-main-700 font-semibold gap-x-2">
      {navigation
        .map((link) => ({ id: createId(), ...link }))
        .map((link) => (
          <NavigationLink key={link.id} {...link} />
        ))}
    </ul>
  )
}

export default memo(NavigationLinks)

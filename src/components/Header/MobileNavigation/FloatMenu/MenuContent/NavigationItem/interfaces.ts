// Types
import type { ReactNode } from 'react'

// Interfaces
import { LinkProps } from '@components/Link/interfaces'
import { MenuLeftData } from '@components/Header/MobileNavigation/useMobileNavigation/interfaces'
// import { MenuLeftData } from './useMenuLeft/interfaces'

export interface NavigationItemProps {
  title: string
  icon: ReactNode
  path: LinkProps['href']
  isProtected?: boolean
  hideInResults?: boolean
  menuLeftData?: MenuLeftData
  navigationItems?: NavigationItemProps[]
}

export interface NavigationLink {
  navigationTitle: string
  navigationItems: NavigationItemProps[]
}

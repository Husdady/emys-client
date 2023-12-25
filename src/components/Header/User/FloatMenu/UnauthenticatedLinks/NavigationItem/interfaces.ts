// Types
import type { ReactNode } from 'react'

// Interfaces
import { LinkProps } from '@components/Link/interfaces'
import { MenuData } from '@components/Header/MobileNavigation/useMobileNavigation/interfaces'
// import { MenuData } from './useMenuLeft/interfaces'

export interface NavigationItemProps {
  title: string
  icon: ReactNode
  path: LinkProps['href']
  isProtected?: boolean
  hideInResults?: boolean
  menuData?: MenuData
  navigationItems?: NavigationItemProps[]
}

export interface NavigationLink {
  navigationTitle: string
  navigationItems: NavigationItemProps[]
}

// Types
import type { ReactNode } from 'react'

// Interfaces
import { LinkProps } from '@components/Link/interfaces'
import { OnlyClassNameProp } from '@config/interfaces'
import { MenuData } from '@components/Header/MobileNavigation/useMobileNavigation/interfaces'

export interface NavigationItemProps extends OnlyClassNameProp {
  title: string
  icon: ReactNode
  path: LinkProps['href']
  hideInResults?: boolean
  menuData?: MenuData
  navigationItems?: NavigationItemProps[]
}

export interface NavigationLink {
  navigationTitle: string
  navigationItems: NavigationItemProps[]
}

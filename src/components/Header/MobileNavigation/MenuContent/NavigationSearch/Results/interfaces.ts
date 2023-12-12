// Interfaces
import { NavigationItemProps } from '@components/Header/MobileNavigation/MenuContent/NavigationItem/interfaces'

export interface ResultProps extends Omit<NavigationItemProps, 'navigationItems'> {
  hideResults: () => void
}

export interface ResultsProps {
  hideResults: () => void
  data: Array<Omit<NavigationItemProps, 'navigationItems'>>
}

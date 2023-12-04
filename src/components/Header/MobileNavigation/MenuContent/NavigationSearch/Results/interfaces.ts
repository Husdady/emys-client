// Interfaces
import { NavigationItemProps } from '@modules/Dashboard/components/MenuLeft/interfaces'

export interface ResultProps extends Omit<NavigationItemProps, 'navigationItems'> {
  hideResults: () => void
}

export interface ResultsProps {
  hideResults: () => void
  data: Array<Omit<NavigationItemProps, 'navigationItems'>>
}

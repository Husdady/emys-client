// Interfaces
import { MutableRefObject } from 'react'
import { NavigationItemProps } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

export interface ResultProps extends Omit<NavigationItemProps, 'navigationItems'> {
  hideResults: () => void
}

export interface ResultsProps {
  hideResults: () => void
  data: Array<Omit<NavigationItemProps, 'navigationItems'>>
  navigationSeekerRef: MutableRefObject<HTMLDivElement | null>
}

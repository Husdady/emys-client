// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/MenuContent/NavigationItem/interfaces'

// Navigation
import mainNavigation from './main.navigation'
import emailNavigation from './email.navigation'
import socialNetworksNavigation from './socialNetworks.navigation'

const navigation: NavigationLink[] = [
  ...mainNavigation,
  ...emailNavigation,
  ...socialNetworksNavigation
]

export default navigation

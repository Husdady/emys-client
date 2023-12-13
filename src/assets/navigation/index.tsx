// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Navigation
import mainNavigation from './main.navigation'
import emailNavigation from './email.navigation'
import membershipNavigation from './membership.navigation'
import socialNetworksNavigation from './socialNetworks.navigation'

const navigation: NavigationLink[] = [
  ...mainNavigation,
  ...membershipNavigation,
  ...emailNavigation,
  ...socialNetworksNavigation
]

export default navigation

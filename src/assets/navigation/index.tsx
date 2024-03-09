// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Navigation
import mainNavigation from './main'
import emailNavigation from './email'
import membershipNavigation from './membership'
import socialNetworksNavigation from './socialNetworks'

const navigation: NavigationLink[] = [
  ...mainNavigation,
  ...membershipNavigation,
  ...emailNavigation,
  ...socialNetworksNavigation
]

export default navigation

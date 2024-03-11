// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Navigation
import mainNavigation from './links/main'
import emailNavigation from './links/email'
import membershipNavigation from './links/membership'
import socialNetworksNavigation from './links/socialNetworks'

const navigation: NavigationLink[] = [
  ...mainNavigation,
  ...membershipNavigation,
  ...emailNavigation,
  ...socialNetworksNavigation
]

export default navigation

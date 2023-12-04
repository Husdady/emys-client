// Interfaces
import { NavigationLink } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Navigation
import usersNavigation from './users.navigation'
import salesNavigation from './sales.navigation'
import productsNavigation from './products.navigation'
import businessNavigation from './business.navigation'
import permissionsNavigation from './permissions.navigation'
import extraContentNavigation from './extraContent.navigation'

const navigation: NavigationLink[] = [
  ...usersNavigation,
  ...productsNavigation,
  ...salesNavigation,
  ...businessNavigation,
  ...permissionsNavigation,
  ...extraContentNavigation
]

export default navigation

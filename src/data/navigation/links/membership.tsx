// Components
import UserTie from '@components/Icons/UserTie'
import UserCircleRegular from '@components/Icons/UserCircleRegular'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Constants
import { OMNILIFE_CLIENT_URL, OMNILIFE_ENTREPRENEUR_URL } from '@config/envs'

const membershipNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Afiliación',
    navigationItems: [
      {
        path: OMNILIFE_CLIENT_URL as string,
        title: 'Afiliarme como Cliente Omnilife',
        icon: <UserCircleRegular />
      },
      {
        path: OMNILIFE_ENTREPRENEUR_URL as string,
        title: 'Afiliarme como Empresario Omnilife',
        icon: <UserTie />
      }
    ]
  }
]

export default membershipNavigation

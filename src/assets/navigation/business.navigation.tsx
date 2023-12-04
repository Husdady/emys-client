// Components
import UserTie from '@assets/icons/user-tie'
import ThumbsUp from '@assets/icons/thumbs-up'
import MoodDollar from '@assets/icons/mood-dollar'

// Interfaces
import { NavigationLink } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Constants
import { sharedIconProps } from './constants'

const businessNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Negocio y configuraciones',
    navigationItems: [
      {
        path: '/dashboard/clients',
        title: 'Administrar clientes',
        icon: <UserTie {...sharedIconProps} />
      },
      {
        path: '/dashboard/sellers',
        title: 'Administrar vendedores',
        icon: <MoodDollar {...sharedIconProps} />
      },
      {
        path: '/dashboard/social-networks',
        title: 'Administrar Redes Sociales',
        icon: <ThumbsUp {...sharedIconProps} />
      }
    ]
  }
]

export default businessNavigation

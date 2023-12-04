// Components
import License from '@assets/icons/license'
import NoDerivatives from '@assets/icons/no-derivatives'

// Interfaces
import { NavigationLink } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Constants
import { sharedIconProps } from './constants'

const permissionsNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Permisos y acciones',
    navigationItems: [
      {
        path: '/dashboard/actions',
        title: 'Administrar acciones',
        icon: <NoDerivatives {...sharedIconProps} />
      },
      {
        path: '/dashboard/permissions',
        title: 'Administrar permisos',
        icon: <License {...sharedIconProps} />
      }
    ]
  }
]

export default permissionsNavigation

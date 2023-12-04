// Components
import World from '@assets/icons/world'
import LayoutDashboard from '@assets/icons/layout-dashboard'

// Interfaces
import { NavigationLink } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Constants
import { sharedIconProps } from './constants'

const extraContentNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Contenido extra',
    navigationItems: [
      {
        path: '/dashboard/ubigeo',
        title: 'Administrar ubigeos',
        icon: <World size="md" />,
        navigationItems: [
          {
            path: '/dashboard/ubigeo/countries',
            title: 'Administrar países',
            icon: <World {...sharedIconProps} />
          },
          {
            path: '/dashboard/ubigeo/regions',
            title: 'Administrar regiones',
            icon: <World {...sharedIconProps} />
          },
          {
            path: '/dashboard/ubigeo/provinces',
            title: 'Administrar provincias',
            icon: <World {...sharedIconProps} />
          },
          {
            path: '/dashboard/ubigeo/districts',
            title: 'Administrar distritos',
            icon: <World {...sharedIconProps} />
          }
        ]
      },
      {
        isProtected: true,
        path: '/dashboard/views',
        title: 'Administrar vistas',
        icon: <LayoutDashboard {...sharedIconProps} />
      }
    ]
  }
]

export default extraContentNavigation

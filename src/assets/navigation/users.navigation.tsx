// Components
import Users from '@assets/icons/users'
import Settings from '@assets/icons/settings'
import ShieldChevron from '@assets/icons/shield-chevron'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLink } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Constants
import { sharedIconProps } from './constants'

const usersNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Usuarios y Roles',
    navigationItems: [
      {
        isProtected: true,
        path: '/dashboard/account',
        title: 'Administrar mi cuenta',
        icon: <Settings {...sharedIconProps} />
      },
      {
        path: '/dashboard/users',
        title: 'Administrar usuarios',
        icon: <Users {...sharedIconProps} />
      },
      {
        path: '/dashboard/roles',
        title: 'Administrar roles',
        icon: <ShieldChevron {...sharedIconProps} />
      },
      {
        path: '/dashboard/testimonials',
        title: 'Administrar testimonios',
        icon: <ReportMedical {...sharedIconProps} />
      }
    ]
  }
]

export default usersNavigation

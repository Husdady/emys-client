// Components
import ReportMoney from '@assets/icons/report-money'
import ShoppingBag from '@assets/icons/shopping-bag'

// Interfaces
import { NavigationLink } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Constants
import { sharedIconProps } from './constants'

const salesNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Ventas y Compras',
    navigationItems: [
      {
        path: '/dashboard/sales',
        title: 'Administrar ventas',
        icon: <ReportMoney size="lg" />,
        navigationItems: [
          {
            hideInResults: true,
            path: '/dashboard/sales/sellers/:sellerId',
            title: 'Administrar ventas de este vendedor',
            icon: <ReportMoney size="lg" />
          },
          {
            hideInResults: true,
            path: '/dashboard/buys/clients/:client',
            title: 'Administrar compras de este cliente',
            icon: <ShoppingBag size="lg" />
          }
        ]
      },
      {
        path: '/dashboard/buys',
        title: 'Administrar compras',
        icon: <ShoppingBag {...sharedIconProps} />
      }
    ]
  }
]

export default salesNavigation

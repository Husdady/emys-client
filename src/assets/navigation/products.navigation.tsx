// Components
import Bottle from '@assets/icons/bottle'
import Perfume from '@assets/icons/perfume'
import BoxSeam from '@assets/icons/box-seam'
import Category from '@assets/icons/category'
import TableAlias from '@assets/icons/table-alias'

// Interfaces
import { NavigationLink } from '@modules/Dashboard/components/MenuLeft/interfaces'

// Constants
import { sharedIconProps } from './constants'

const productsNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Productos y Categorías',
    navigationItems: [
      {
        icon: <Category {...sharedIconProps} />,
        title: 'Administrar categorías',
        path: '/dashboard/categories'
      },
      {
        icon: <Bottle {...sharedIconProps} />,
        title: 'Administrar productos Omnilife',
        path: '/dashboard/products/omnilife'
      },
      {
        icon: <Perfume {...sharedIconProps} />,
        title: 'Administrar productos Seytú',
        path: '/dashboard/products/seytu'
      },
      {
        icon: <BoxSeam {...sharedIconProps} />,
        title: 'Administrar mis productos',
        path: '/dashboard/products'
      },
      {
        icon: <TableAlias {...sharedIconProps} />,
        title: 'Administrar campos flexibles',
        path: '/dashboard/products/custom-fields'
      }
    ]
  }
]

export default productsNavigation

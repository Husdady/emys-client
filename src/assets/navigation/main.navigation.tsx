// Components
import Home from '@assets/icons/home'
import Users from '@assets/icons/users'
import BoxSeam from '@assets/icons/box-seam'
import HeadPhones from '@assets/icons/headphones'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Constants
import {
  HOME_PATH,
  CONTACT_PATH,
  PRODUCTS_PATH,
  MEMBERSHIP_PATH,
  TESTIMONIALS_PATH
} from '@assets/data/paths'

const mainNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Enlaces de navegación',
    navigationItems: [
      {
        path: HOME_PATH,
        title: 'Inicio',
        icon: <Home className="md home-icon" />
      },
      { icon: <HeadPhones className="smd" />, path: CONTACT_PATH, title: 'Contacto' },
      {
        path: PRODUCTS_PATH,
        title: 'Productos',
        icon: <BoxSeam className="md products-icon" />
      },
      {
        path: TESTIMONIALS_PATH,
        title: 'Testimonios Omnilife',
        icon: <ReportMedical className="md testimonials-icon" />
      },
      {
        path: MEMBERSHIP_PATH,
        title: 'Programa de Afiliados',
        icon: <Users className="md stroke-3" />
      }
    ]
  }
]

export default mainNavigation

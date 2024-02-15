// Components
import Home from '@assets/icons/home'
import BoxSeam from '@assets/icons/box-seam'
import HeadPhones from '@assets/icons/headphones'
import MoodDollar from '@assets/icons/mood-dollar'
import BrandMyOppo from '@assets/icons/brand-my-oppo'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Constants
import {
  HOME_PATH,
  CONTACT_PATH,
  SELLERS_PATH,
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
      { icon: <MoodDollar className="smd" />, path: SELLERS_PATH, title: 'Vendedores' },
      {
        path: PRODUCTS_PATH,
        title: 'Productos',
        icon: <BoxSeam className="md products-icon" />
      },
      {
        title: 'Testimonios',
        path: TESTIMONIALS_PATH,
        icon: <ReportMedical className="md testimonials-icon" />
      },
      {
        title: 'Afiliación',
        path: MEMBERSHIP_PATH,
        icon: <BrandMyOppo className="md stroke-3" />
      }
    ]
  }
]

export default mainNavigation

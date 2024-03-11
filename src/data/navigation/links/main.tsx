// Components
import Home from '@components/Icons/Home'
import BoxSeam from '@components/Icons/BoxSeam'
import HeadPhones from '@components/Icons/HeadPhones'
import MoodDollar from '@components/Icons/MoodDollar'
import BrandMyOppo from '@components/Icons/BrandMyOppo'
import ReportMedical from '@components/Icons/ReportMedical'

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
} from '@data/paths'

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

// Components
import Home from '@assets/icons/home'
import BoxSeam from '@assets/icons/box-seam'
import HeadPhones from '@assets/icons/headphones'
import MoodDollar from '@assets/icons/mood-dollar'
import BrandMyOppo from '@assets/icons/brand-my-oppo'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLinkProps } from './interfaces'

// Constants
import {
  HOME_PATH,
  CONTACT_PATH,
  SELLERS_PATH,
  PRODUCTS_PATH,
  MEMBERSHIP_PATH,
  TESTIMONIALS_PATH
} from '@assets/data/paths'

const navigation: NavigationLinkProps[] = [
  { text: 'Inicio', href: HOME_PATH, icon: <Home className="smd home-icon" /> },
  {
    text: 'Productos',
    href: PRODUCTS_PATH,
    icon: <BoxSeam className="smd products-icon" />
  },
  {
    text: 'Afiliación',
    href: MEMBERSHIP_PATH,
    icon: <BrandMyOppo className="smx stroke-3" />
  },
  {
    text: 'Vendedores',
    href: SELLERS_PATH,
    icon: <MoodDollar className="smx" />
  },
  {
    text: 'Testimonios',
    href: TESTIMONIALS_PATH,
    icon: <ReportMedical className="smd testimonials-icon" />
  },
  { text: 'Contacto', href: CONTACT_PATH, icon: <HeadPhones className="smx" /> }
]

export default navigation

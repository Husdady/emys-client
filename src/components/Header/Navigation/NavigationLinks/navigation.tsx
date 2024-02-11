// Components
import Home from '@assets/icons/home'
import Users from '@assets/icons/users'
import BoxSeam from '@assets/icons/box-seam'
import HeadPhones from '@assets/icons/headphones'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLinkProps } from './interfaces'

// Constants
import {
  HOME_PATH,
  CONTACT_PATH,
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
    href: MEMBERSHIP_PATH,
    text: 'Programa de Afiliados',
    icon: <Users className="smx stroke-3" />
  },
  {
    href: TESTIMONIALS_PATH,
    text: 'Testimonios Omnilife',
    icon: <ReportMedical className="smd testimonials-icon" />
  },
  { text: 'Contacto', href: CONTACT_PATH, icon: <HeadPhones className="smx" /> }
]

export default navigation

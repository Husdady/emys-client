// Components
import Home from '@components/Icons/Home'
import BoxSeam from '@components/Icons/BoxSeam'
import HeadPhones from '@root/src/components/Icons/HeadPhones'
import MoodDollar from '@components/Icons/MoodDollar'
import BrandMyOppo from '@components/Icons/BrandMyOppo'
import ReportMedical from '@components/Icons/ReportMedical'

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

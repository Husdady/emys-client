// Components
import Home from '@assets/icons/home'
import Users from '@assets/icons/users'
import BoxSeam from '@assets/icons/box-seam'
import HeadPhones from '@assets/icons/headphones'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLinkProps } from './interfaces'

const navigation: NavigationLinkProps[] = [
  { icon: <Home className="smd home-icon" />, href: '/', text: 'Inicio' },
  {
    text: 'Productos',
    href: '/productos',
    icon: <BoxSeam className="smd products-icon" />
  },
  {
    text: 'Programa de Afiliados',
    href: '/programa-de-afiliados',
    icon: <Users className="smx stroke-3" />
  },
  {
    text: 'Testimonios Omnilife',
    href: '/testimonios-omnilife',
    icon: <ReportMedical className="smd testimonials-icon" />
  },
  { icon: <HeadPhones className="smx" />, href: '/contacto', text: 'Contacto' }
]

export default navigation

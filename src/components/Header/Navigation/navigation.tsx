// Components
import Home from '@root/src/assets/icons/home'
import Users from '@root/src/assets/icons/users'
import BoxSeam from '@root/src/assets/icons/box-seam'

// Interfaces
import { NavigationLinkProps } from './interfaces'
import ReportMedical from '@root/src/assets/icons/report-medical'
import Mail from '@root/src/assets/icons/mail'

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
  { icon: <Mail className="smx" />, href: '/contacto', text: 'Contacto' }
]

export default navigation

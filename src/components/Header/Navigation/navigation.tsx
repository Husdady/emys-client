// Components
import Home from '@root/src/assets/icons/home'
import Users from '@root/src/assets/icons/users'
import BoxSeam from '@root/src/assets/icons/box-seam'

// Interfaces
import { NavigationLinkProps } from './interfaces'
import ReportMedical from '@root/src/assets/icons/report-medical'
import Mail from '@root/src/assets/icons/mail'

const navigation: NavigationLinkProps[] = [
  { icon: <Home className="smd" />, href: '/', text: 'Inicio' },
  { icon: <BoxSeam className="smd" />, href: '/productos', text: 'Productos' },
  {
    icon: <Users className="smx stroke-3" />,
    href: '/programa-de-afiliados',
    text: 'Programa de Afiliados'
  },
  {
    icon: <ReportMedical className="smd" />,
    href: '/testimonios-omnilife',
    text: 'Testimonios Omnilife'
  },
  { icon: <Mail className="smx" />, href: '/contacto', text: 'Contacto' }
]

export default navigation

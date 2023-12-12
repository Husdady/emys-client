// Components
import Mail from '@assets/icons/mail'
import Home from '@assets/icons/home'
import Users from '@assets/icons/users'
import BoxSeam from '@assets/icons/box-seam'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/MenuContent/NavigationItem/interfaces'

const navigation: NavigationLink[] = [
  {
    navigationTitle: 'Enlaces de navegación',
    navigationItems: [
      {
        path: '/dashboard/clients',
        title: 'Inicio',
        icon: <Home className="smd home-icon" />
      },
      {
        title: 'Productos',
        path: '/productos',
        icon: <BoxSeam className="smd products-icon" />
      },
      {
        title: 'Programa de Afiliados',
        path: '/programa-de-afiliados',
        icon: <Users className="smx stroke-3" />
      },
      {
        title: 'Testimonios Omnilife',
        path: '/testimonios-omnilife',
        icon: <ReportMedical className="smd testimonials-icon" />
      },
      { icon: <Mail className="smx" />, path: '/contacto', title: 'Contacto' }
    ]
  }
]

export default navigation

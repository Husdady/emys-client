// Components
import Home from '@assets/icons/home'
import Users from '@assets/icons/users'
import BoxSeam from '@assets/icons/box-seam'
import HeadPhones from '@assets/icons/headphones'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/MenuContent/NavigationItem/interfaces'

const mainNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Enlaces de navegación',
    navigationItems: [
      {
        path: '/dashboard/clients',
        title: 'Inicio',
        icon: <Home className="md home-icon" />
      },
      { icon: <HeadPhones className="smd" />, path: '/contacto', title: 'Contacto' },
      {
        title: 'Productos',
        path: '/productos',
        icon: <BoxSeam className="md products-icon" />
      },
      {
        title: 'Testimonios Omnilife',
        path: '/testimonios-omnilife',
        icon: <ReportMedical className="md testimonials-icon" />
      },
      {
        title: 'Programa de Afiliados',
        path: '/programa-de-afiliados',
        icon: <Users className="md stroke-3" />
      }
    ]
  }
]

export default mainNavigation

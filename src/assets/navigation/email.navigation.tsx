// Components
import Mail from '@assets/icons/mail'
import Home from '@assets/icons/home'
import Users from '@assets/icons/users'
import BoxSeam from '@assets/icons/box-seam'
import ReportMedical from '@assets/icons/report-medical'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/MenuContent/NavigationItem/interfaces'

// Constants
import { CONTACT_EMAIL_01, CONTACT_EMAIL_02, CONTACT_EMAIL_03 } from '@config/envs'

const navigation: NavigationLink[] = [
  {
    navigationTitle: 'Correo electrónico',
    navigationItems: [CONTACT_EMAIL_01, CONTACT_EMAIL_02, CONTACT_EMAIL_03].map((email) => ({
      title: email as string,
      path: `mailto:${email}`,
      icon: <Mail className="smd" />
    }))
  }
]

export default navigation

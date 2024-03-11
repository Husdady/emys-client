// Components
import Mail from '@components/Icons/Mail'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Constants
import {
  CONTACT_EMAIL_01,
  CONTACT_EMAIL_02,
  CONTACT_EMAIL_03,
  CONTACT_EMAIL_04
} from '@config/envs'

const emailNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Correo electrónico',
    navigationItems: [CONTACT_EMAIL_01, CONTACT_EMAIL_02, CONTACT_EMAIL_03, CONTACT_EMAIL_04].map(
      (email) => ({
        title: email as string,
        path: `mailto:${email}`,
        icon: <Mail className="smd" />
      })
    )
  }
]

export default emailNavigation

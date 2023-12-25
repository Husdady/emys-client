// Components
import Lock from '@assets/icons/lock'
import Mail from '@assets/icons/mail'
import Login from '@assets/icons/login'
import UserCircleRegular from '@assets/icons/user-circle-regular'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Constants
import {
  FORGOT_EMAIL_PATH,
  FORGOT_PASSWORD_PATH,
  LOGIN_PATH,
  REGISTER_PATH
} from '@assets/data/paths'

const unauthenticatedNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Afiliación',
    navigationItems: [
      {
        path: REGISTER_PATH,
        title: 'Crear cuenta',
        icon: <UserCircleRegular />
      },
      {
        icon: <Login />,
        path: LOGIN_PATH,
        title: 'Iniciar sesión'
      },
      {
        icon: <Lock />,
        path: FORGOT_PASSWORD_PATH,
        title: '¿Olvidaste tu contraseña?'
      },
      {
        icon: <Mail />,
        path: FORGOT_EMAIL_PATH,
        title: '¿Olvidaste tu correo electrónico?'
      }
    ]
  }
]

export default unauthenticatedNavigation

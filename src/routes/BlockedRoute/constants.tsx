// Components
import LoginIcon from '@assets/icons/login'

// Types
import type { ImageType } from '@config/global-types'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

// Images
import unauthorizedImage from '@assets/images/unauthorized-access.webp'

// Constants
export const DEFAULT_TITLE = 'Actualmente no puedes visualizar este ruta porque está protegida'

export const DEFAULT_DESCRIPTION =
  'La ruta que intentas acceder, está protegida, por lo que no puede ser visualizada como debe ser. Te recomendamos que vuelvas al Inicio de sesión.'

export const DEFAULT_CUSTOM_TITLE = {
  className: 't-mt-8 text-purple-700 dark:text-purple-300'
}

export const DEFAULT_BUTTON: ButtonProps = {
  icon: <LoginIcon className="mr-2" />,
  title: 'Volver al Inicio de sesión',
  className:
    'bg-purple-500 hover:ring-purple-500 hover:text-purple-600 dark:bg-purple-600 hover:ring-purple-600 dark:hover:bg-transparent dark:hover:text-purple-400'
}

export const DEFAULT_IMAGE: ImageType = {
  width: 350,
  height: 350,
  src: unauthorizedImage,
  alt: 'blocked-route-image'
}

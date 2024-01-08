// Components
import LoginIcon from '@assets/icons/login'

// Types
import type { ImageProps } from 'next/image'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

// Images
import unauthorizedImage from '@assets/images/unauthorized-access.webp'

// Constants
export const DEFAULT_TITLE = 'Actualmente no puedes visualizar esta ruta porque está protegida'

export const DEFAULT_DESCRIPTION =
  'La ruta que intentas acceder, está protegida, por lo que no puede ser visualizada como debe ser. Te recomendamos que vuelvas al Inicio de sesión.'

export const DEFAULT_CUSTOM_TITLE = {
  className: '!mb-1 text-purple-700 dark:text-purple-300 2xl:mt-4 2xl:max-w-[700px]'
}

export const DEFAULT_BUTTON: ButtonProps = {
  icon: <LoginIcon size="md" />,
  title: 'Volver al Inicio de sesión',
  className:
    'bg-purple-500 hover:ring-purple-500 hover:text-purple-600 dark:bg-purple-600 hover:ring-purple-600 dark:hover:bg-transparent dark:hover:text-purple-400'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 280,
  height: 280,
  src: unauthorizedImage,
  className: 'h-[280px]',
  alt: 'blocked-route-image'
}

// Components
import Home from '@assets/icons/home'

// Types
import type { ImageProps } from 'next/image'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

// Images
import missingImage from '@assets/images/404.webp'

// Constants
export const DEFAULT_TITLE = 'Lo siento. Página no encontrada'

export const DEFAULT_DESCRIPTION =
  'La ruta que intentas acceder no existe o tal vez está mal escrita. Te recomendamos que verifiques la ruta por si exista un error tipográfico o en cambio, puedes volver a una ruta inicial de la aplicación.'

export const DEFAULT_CUSTOM_TITLE = {
  className: 'mt-1 text-red-500 w-full dark:text-red-400'
}

export const DEFAULT_BUTTON: ButtonProps = {
  icon: <Home size="smd" />,
  title: 'Volver a la sección inicial',
  className:
    'bg-red-500 hover:ring-red-500 dark:bg-red-600 dark:hover:ring-red-400 hover:text-red-600 dark:hover:text-red-400'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 375,
  height: 250,
  src: missingImage,
  className: 'h-[250px]',
  alt: 'missing-route-image'
}

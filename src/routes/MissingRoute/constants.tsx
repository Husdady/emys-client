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
  className: 'text-red-500 w-full sm:w-6/12 dark:text-red-400'
}

export const DEFAULT_CUSTOM_DESCRIPTION = {
  className: 'md:w-7/12 lg:w-5/12'
}

export const DEFAULT_BUTTON: ButtonProps = {
  icon: <Home size="md" className="mr-1" />,
  title: 'Volver a la sección inicial',
  className:
    'bg-red-500 hover:ring-red-500 dark:bg-red-600 dark:hover:ring-red-400 hover:text-red-600 hover:font-semibold dark:hover:font-normal dark:hover:text-red-400'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 375,
  height: 275,
  src: missingImage,
  className: 'h-[275px]',
  alt: 'missing-route-image'
}

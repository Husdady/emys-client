// Components
import Home from '@components/Icons/Home'

// Types
import type { ImageProps } from 'next/image'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

// Constants
import { PAGE_NOT_FOUND_IMAGE } from '@data/images'

export const DEFAULT_TITLE = 'Lo siento. Página no encontrada'

export const DEFAULT_DESCRIPTION =
  'La ruta que intentas acceder no existe o tal vez está mal escrita. Te recomendamos que verifiques la ruta por si exista un error tipográfico o en cambio, puedes volver a una ruta inicial de la aplicación.'

export const DEFAULT_CUSTOM_TITLE = {
  className: 'mt-2 text-red-500 w-full dark:text-red-400'
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
  className: 'h-[250px]',
  alt: 'missing-route-image',
  src: PAGE_NOT_FOUND_IMAGE
}

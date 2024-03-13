// Components
import Home from '@components/Icons/Home'

// Types
import type { ImageProps } from 'next/image'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

// Constants
import { BUG_FOUND_IMAGE } from '@data/images'

export const DEFAULT_TITLE = 'Ah ocurrido un error al mostrar los últimos vendedores registrados'

export const DEFAULT_DESCRIPTION =
  '¡Lo sentimos! Parece que hemos encontrado un problema al intentar obtener la información de los últimos vendedores registrados.'

export const DEFAULT_CUSTOM_TITLE = {
  className: 'text-red-500 w-full !px-0 dark:text-red-400 mt-1.5'
}

export const DEFAULT_CUSTOM_DESCRIPTION = {
  className: '!px-0'
}

export const DEFAULT_BUTTON: ButtonProps = {
  icon: <Home size="smd" />,
  title: 'Volver a la sección inicial',
  className:
    'bg-red-500 hover:ring-red-500 dark:bg-red-600 dark:hover:ring-red-400 hover:text-red-600 dark:hover:text-red-400'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 375,
  height: 275,
  src: BUG_FOUND_IMAGE,
  className: 'h-[275px]',
  alt: 'error-latest-registered-sellers'
}

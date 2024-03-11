// Types
import type { ImageProps } from 'next/image'

// Constants
import { OFFLINE_IMAGE } from '@data/images'

export const DEFAULT_TITLE = 'Se ha perdido la conexión a internet...'

export const DEFAULT_DESCRIPTION =
  'Lo sentimos, parece que no tienes conexión a Internet en este momento. Por favor, verifica tu configuración de red y vuelve a intentarlo más tarde'

export const DEFAULT_CUSTOM_TITLE = {
  className: 'text-red-500 w-full dark:text-red-300 lg:!px-0 max-w-[initial] mt-1 !max-w-[600px]'
}

export const DEFAULT_CUSTOM_DESCRIPTION = {
  className: 'mt-0'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 300,
  height: 260,
  className: 'h-auto',
  alt: 'offline-picture',
  src: OFFLINE_IMAGE
}

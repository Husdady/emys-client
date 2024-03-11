// Types
import type { ImageProps } from 'next/image'

// Constants
import { EMPTY_LATEST_SELLERS_IMAGE } from '@data/images'

export const DEFAULT_TITLE = 'Aún no se han registrado vendedores...'

export const DEFAULT_DESCRIPTION =
  'Queremos informarle que, hasta el momento, no se ha registrado ningún vendedor en nuestra plataforma. Estamos trabajando diligentemente para brindarle la mejor experiencia de compra, y pronto incorporaremos vendedores para ampliar nuestra oferta de productos.'

export const DEFAULT_CUSTOM_TITLE = {
  className: 'text-rose-500 w-full dark:text-pink-300'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 375,
  height: 275,
  className: 'h-[275px]',
  alt: 'empty-latest-sellers',
  src: EMPTY_LATEST_SELLERS_IMAGE
}

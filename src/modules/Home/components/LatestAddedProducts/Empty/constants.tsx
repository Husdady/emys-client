// Types
import type { ImageProps } from 'next/image'

// Constants
import { EMPTY_LATEST_PRODUCTS_IMAGE } from '@data/images'

export const DEFAULT_TITLE = 'Aún no se han añadido productos...'

export const DEFAULT_DESCRIPTION =
  'Hasta el momento, no se ha procedido a la incorporación de nuevos productos en nuestro catálogo; sin embargo, estamos trabajando diligentemente en ello para brindar a nuestros clientes una gran variedad de opciones que satisfagan sus necesidades y preferencias.'

export const DEFAULT_CUSTOM_TITLE = {
  className: '-mt-1.5 mb-1 text-rose-500 w-full dark:text-pink-300 sm:max-w-[380px]'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 375,
  height: 275,
  className: 'h-[275px]',
  alt: 'empty-latest-products',
  src: EMPTY_LATEST_PRODUCTS_IMAGE
}

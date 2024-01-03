// Types
import type { ImageProps } from 'next/image'

// Images
import emptyLatestProductsImage from '@assets/images/empty-latest-products.webp'

// Constants
export const DEFAULT_TITLE = 'Aún no se han añadido productos...'

export const DEFAULT_DESCRIPTION =
  'Hasta el momento, no se ha procedido a la incorporación de nuevos productos en nuestro catálogo; sin embargo, estamos trabajando diligentemente en ello para brindar a nuestros clientes una gran variedad de opciones que satisfagan sus necesidades y preferencias.'

export const DEFAULT_CUSTOM_TITLE = {
  className: 'text-rose-500 w-full sm:w-6/12 dark:text-pink-300'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 375,
  height: 275,
  src: emptyLatestProductsImage,
  className: 'h-[275px]',
  alt: 'empty-latest-products'
}

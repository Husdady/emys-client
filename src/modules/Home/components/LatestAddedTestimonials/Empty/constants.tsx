// Types
import type { ImageProps } from 'next/image'

// Constants
import { EMPTY_LATEST_TESTIMONIALS_IMAGE } from '@data/images'

export const DEFAULT_TITLE = 'Aún no se han añadido testimonios...'

export const DEFAULT_DESCRIPTION =
  'Queremos informarle que, hasta el momento, no se han añadido testimonios en nuestra plataforma. Estamos trabajando diligentemente en anexar testimonios de gente que haya usado nuestros productos.'

export const DEFAULT_CUSTOM_TITLE = {
  className: 'text-purple-500 w-full dark:text-purple-400 mt-2'
}

export const DEFAULT_IMAGE: ImageProps = {
  width: 375,
  height: 275,
  className: 'h-[275px]',
  alt: 'empty-latest-testimonials',
  src: EMPTY_LATEST_TESTIMONIALS_IMAGE
}

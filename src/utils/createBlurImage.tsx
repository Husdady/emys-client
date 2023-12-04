// Librarys
import Image from 'next/image'

// Types
import type { ImageProps } from 'next/image'

// Utils
import getBase64 from './getBase64'

export default async function createBlurImage(
  props: Omit<ImageProps, 'placeholder' | 'blurDataURL'>
) {
  // const data = await getBase64(props.src as string)

  return <Image {...props} placeholder="blur" />
}

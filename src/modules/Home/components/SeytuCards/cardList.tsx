// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { HomeCardProps } from '@modules/Home/components/Card/interfaces'

// Constants
import { PARABENS_IMAGE, SEYTU_MAKEUP_IMAGE, BEAUTY_PRODUCTS_IMAGE } from '@data/images'

const CARD_01_ID = createId()
const CARD_02_ID = createId()
const CARD_03_ID = createId()

const cards: HomeCardProps[] = [
  {
    id: CARD_01_ID,
    title: 'Nosotros también vendemos Seytú',
    imageProps: { width: 550, height: 550, alt: 'seytu-makeup', src: SEYTU_MAKEUP_IMAGE },
    description:
      'SEYTÚ es la línea nutricional no testada en animales, libre de parabenos, con fórmulas orgánicas; contiene...'
  },
  {
    id: CARD_02_ID,
    animationUtilityClassName: 'animate__delay-1s',
    title: 'Productos de belleza y cuidado de la piel',
    buttonTitle: 'Que interesante!',
    imageProps: { width: 1499, height: 1164, alt: 'beauty-products', src: BEAUTY_PRODUCTS_IMAGE },
    description:
      'SEYTÚ, es una reconocida marca en el mundo del cuidado de la piel y la belleza, ofrece una gama excepcional de...'
  },
  {
    id: CARD_03_ID,
    title: 'No contienen parabenos',
    buttonTitle: 'Impresionante!',
    animationUtilityClassName: 'animate__delay-2s',
    imageProps: { width: 512, height: 367, alt: 'without-parabens', src: PARABENS_IMAGE },
    description:
      'Los parabenos son una clase de compuestos químicos utilizados comúnmente como conservantes en productos...'
  }
]

export default cards

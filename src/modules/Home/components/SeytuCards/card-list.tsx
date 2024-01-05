// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { HomeCardProps } from '@modules/Home/components/Card/interfaces'

// Images
import parabensImage from '@assets/images/parabens.webp'
import seytuMakeupImage from '@assets/images/seytu-makeup.webp'
import beautyProductsImage from '@assets/images/beauty-products.webp'

// Constants
const cards: HomeCardProps[] = [
  {
    className: 'flex-row-reverse',
    title: 'Nosotros también vendemos Seytú',
    imageProps: { alt: 'omnilife-campus', src: seytuMakeupImage },
    description:
      'SEYTÚ es la línea nutricional no testada en animales, libre de parabenos, con fórmulas orgánicas; contiene...'
  },
  {
    animationUtilityClassName: 'animate__delay-1s',
    title: 'Productos de belleza y cuidado de la piel',
    buttonTitle: 'Que interesante!',
    imageProps: { alt: 'omnilife-campus', src: beautyProductsImage },
    description:
      'SEYTÚ, es una reconocida marca en el mundo del cuidado de la piel y la belleza, ofrece una gama excepcional de...'
  },
  {
    className: 'flex-row-reverse',
    title: 'No contienen parabenos',
    buttonTitle: 'Impresionante!',
    animationUtilityClassName: 'animate__delay-2s',
    imageProps: { alt: 'without-parabens', src: parabensImage },
    description:
      'Los parabenos son una clase de compuestos químicos utilizados comúnmente como conservantes en productos...'
  }
].map((card) => ({ ...card, id: createId() }))

export default cards

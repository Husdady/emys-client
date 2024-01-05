// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { HomeCardProps } from '@modules/Home/components/Card/interfaces'

// Images
import micellizationImage from '@assets/images/micellization.webp'
import omnilifeCampusImage from '@assets/images/omnilife-campus.webp'
import healthPriorityImage from '@assets/images/health-priority.webp'

// Constants
const cards: HomeCardProps[] = [
  {
    title: 'Nosotros también vendemos Omnilife',
    imageProps: { alt: 'omnilife-campus', src: omnilifeCampusImage },
    description:
      'Omnilife es una empresa de marketing multinivel mexicano radicado en la ciudad de Guadalajara, Jalisco, México...'
  },
  {
    buttonTitle: '¿Qué es eso?',
    className: 'flex-row-reverse',
    title: 'El proceso de Micelización',
    animationUtilityClassName: 'animate__delay-1s',
    imageProps: { alt: 'omnilife-campus', src: micellizationImage },
    description:
      'La Micelización de Omnilife consiste en hacer que las moléculas grasas o lípidas como las de la vitamina A, D...'
  },
  {
    buttonTitle: 'Me interesa!',
    title: 'Tu bienestar es nuestra prioridad',
    animationUtilityClassName: 'animate__delay-2s',
    imageProps: { alt: 'omnilife-campus', src: healthPriorityImage },
    description:
      'Omnilife es una empresa que se especializa en la fabricación y venta de suplementos nutricionales y productos...'
  }
].map((card) => ({ ...card, id: createId() }))

export default cards

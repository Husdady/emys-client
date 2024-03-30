// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { HomeCardProps } from '@modules/Home/components/Card/interfaces'

// Constants
import { MICELLIZATION_IMAGE, PEOPLE_HEALTHY_IMAGE, HEALTH_PRIORITY_IMAGE } from '@data/images'

const CARD_01_ID = createId()
const CARD_02_ID = createId()
const CARD_03_ID = createId()

const cards: HomeCardProps[] = [
  {
    id: CARD_01_ID,
    title: 'Nosotros también vendemos Omnilife',
    imageProps: { width: 958, height: 541, alt: 'omnilife-campus', src: PEOPLE_HEALTHY_IMAGE },
    description:
      'Omnilife es una empresa de marketing multinivel mexicano radicado en la ciudad de Guadalajara, Jalisco, México...'
  },
  {
    id: CARD_02_ID,
    buttonTitle: '¿Qué es eso?',
    title: 'El proceso de Micelización',
    animationUtilityClassName: 'animate__delay-1s',
    imageProps: { width: 700, height: 453, alt: 'micellization', src: MICELLIZATION_IMAGE },
    description:
      'La Micelización de Omnilife consiste en hacer que las moléculas grasas o lípidas como las de la vitamina A, D...'
  },
  {
    id: CARD_03_ID,
    buttonTitle: 'Me interesa!',
    title: 'Tu bienestar es nuestra prioridad',
    animationUtilityClassName: 'animate__delay-2s',
    imageProps: { width: 626, height: 417, alt: 'health-priority', src: HEALTH_PRIORITY_IMAGE },
    description:
      'Omnilife es una empresa que se especializa en la fabricación y venta de suplementos nutricionales y productos...'
  }
]

export default cards

// Components
import Home from '@components/Icons/Home'
import Mail from '@components/Icons/Mail'
import BoxSeam from '@components/Icons/BoxSeam'
import Facebook from '@components/Icons/Facebook'
import HeadPhones from '@components/Icons/HeadPhones'
import MoodDollar from '@components/Icons/MoodDollar'
import BrandMyOppo from '@components/Icons/BrandMyOppo'
import ReportMedical from '@components/Icons/ReportMedical'
import BrandWhatsapp from '@components/Icons/BrandWhatsapp'

// Interfaces
import { SectionProps } from './interfaces'

// Constants
import { sharedIconProps, sharedFacebookIconProps, sharedWhatsappIconProps } from './constants'
import {
  HOME_PATH,
  CONTACT_PATH,
  SELLERS_PATH,
  PRODUCTS_PATH,
  MEMBERSHIP_PATH,
  TESTIMONIALS_PATH
} from '@data/paths'
import {
  CONTACT_EMAIL_01,
  CONTACT_EMAIL_02,
  CONTACT_EMAIL_03,
  CONTACT_EMAIL_04,
  WHATSAPP_CONTACT_URL_01,
  WHATSAPP_CONTACT_URL_02,
  WHATSAPP_CONTACT_NUMBER_01,
  WHATSAPP_CONTACT_NUMBER_02,
  CONTACT_FACEBOOK_PAGE_URL_01,
  CONTACT_FACEBOOK_PAGE_URL_02,
  CONTACT_FACEBOOK_PAGE_NAME_01,
  CONTACT_FACEBOOK_PAGE_NAME_02
} from '@config/envs'

const sections: SectionProps[] = [
  {
    title: 'Enlaces rápidos',
    links: [
      {
        text: 'Inicio',
        href: HOME_PATH,
        icon: <Home {...sharedIconProps} />
      },
      {
        text: 'Productos',
        href: PRODUCTS_PATH,
        icon: <BoxSeam {...sharedIconProps} />
      },
      {
        text: 'Afiliación',
        href: MEMBERSHIP_PATH,
        icon: <BrandMyOppo {...sharedIconProps} />
      },
      {
        text: 'Testimonios',
        href: TESTIMONIALS_PATH,
        icon: <ReportMedical {...sharedIconProps} />
      },
      {
        href: SELLERS_PATH,
        text: 'Vendedores',
        icon: <MoodDollar {...sharedIconProps} />
      },
      {
        text: 'Contacto',
        href: CONTACT_PATH,
        icon: <HeadPhones {...sharedIconProps} />
      }
    ]
  },
  {
    hasExternalLinks: true,
    title: 'Redes Sociales',
    links: [
      {
        href: CONTACT_FACEBOOK_PAGE_URL_01,
        text: CONTACT_FACEBOOK_PAGE_NAME_01,
        icon: <Facebook {...sharedFacebookIconProps} />
      },
      {
        href: CONTACT_FACEBOOK_PAGE_URL_02,
        text: CONTACT_FACEBOOK_PAGE_NAME_02,
        icon: <Facebook {...sharedFacebookIconProps} />
      },
      {
        href: WHATSAPP_CONTACT_URL_01,
        text: WHATSAPP_CONTACT_NUMBER_01,
        icon: <BrandWhatsapp {...sharedWhatsappIconProps} />
      },
      {
        href: WHATSAPP_CONTACT_URL_02,
        text: WHATSAPP_CONTACT_NUMBER_02,
        icon: <BrandWhatsapp {...sharedWhatsappIconProps} />
      }
    ]
  },
  {
    title: 'Correo electrónico',
    links: [CONTACT_EMAIL_01, CONTACT_EMAIL_02, CONTACT_EMAIL_03, CONTACT_EMAIL_04].map(
      (email) => ({
        text: email,
        href: `mailto:${email}`,
        icon: <Mail {...sharedIconProps} />
      })
    )
  }
]

export default sections

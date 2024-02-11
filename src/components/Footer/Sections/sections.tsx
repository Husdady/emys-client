// Components
import Home from '@assets/icons/home'
import Mail from '@assets/icons/mail'
import Users from '@assets/icons/users'
import BoxSeam from '@assets/icons/box-seam'
import Facebook from '@assets/icons/facebook'
import ReportMedical from '@assets/icons/report-medical'
import BrandWhatsapp from '@assets/icons/brand-whatsapp'

// Interfaces
import { SectionProps } from './interfaces'

// Constants
import { sharedIconProps, sharedFacebookIconProps, sharedWhatsappIconProps } from './constants'
import { HOME_PATH, PRODUCTS_PATH, MEMBERSHIP_PATH, TESTIMONIALS_PATH } from '@assets/data/paths'
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
        href: MEMBERSHIP_PATH,
        text: 'Programa de afiliados',
        icon: <Users {...sharedIconProps} />
      },
      {
        href: TESTIMONIALS_PATH,
        text: 'Testimonios Omnilife',
        icon: <ReportMedical {...sharedIconProps} />
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

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
import { LINK_TYPE, TEXT_TYPE, sharedIconProps } from './constants'
import {
  CONTACT_EMAIL_01,
  CONTACT_EMAIL_02,
  CONTACT_EMAIL_03,
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
    type: LINK_TYPE,
    title: 'Enlaces rápidos',
    links: [
      {
        href: '/',
        text: 'Inicio',
        icon: <Home {...sharedIconProps} />
      },
      {
        text: 'Productos',
        href: '/productos',
        icon: <BoxSeam {...sharedIconProps} />
      },
      {
        text: 'Programa de afiliados',
        href: '/programa-de-afiliados',
        icon: <Users {...sharedIconProps} />
      },
      {
        href: '/testimonios',
        text: 'Testimonios Omnilife',
        icon: <ReportMedical {...sharedIconProps} />
      }
    ]
  },
  {
    type: LINK_TYPE,
    hasExternalLinks: true,
    title: 'Redes Sociales',
    links: [
      {
        href: CONTACT_FACEBOOK_PAGE_URL_01,
        text: CONTACT_FACEBOOK_PAGE_NAME_01,
        icon: <Facebook {...sharedIconProps} />
      },
      {
        href: CONTACT_FACEBOOK_PAGE_URL_02,
        text: CONTACT_FACEBOOK_PAGE_NAME_02,
        icon: <Facebook {...sharedIconProps} />
      },
      {
        href: WHATSAPP_CONTACT_URL_01,
        text: WHATSAPP_CONTACT_NUMBER_01,
        icon: <BrandWhatsapp {...sharedIconProps} />
      },
      {
        href: WHATSAPP_CONTACT_URL_02,
        text: WHATSAPP_CONTACT_NUMBER_02,
        icon: <BrandWhatsapp {...sharedIconProps} />
      }
    ]
  },
  {
    type: TEXT_TYPE,
    title: 'Correo electrónico',
    links: [CONTACT_EMAIL_01, CONTACT_EMAIL_02, CONTACT_EMAIL_03].map((email) => ({
      text: email,
      icon: <Mail {...sharedIconProps} />
    }))
  }
]

export default sections

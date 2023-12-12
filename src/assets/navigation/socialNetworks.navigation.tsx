// Components
import Facebook from '@assets/icons/facebook'
import BrandWhatsapp from '@assets/icons/brand-whatsapp'

// Interfaces
import { NavigationLink } from '@components/Header/MobileNavigation/MenuContent/NavigationItem/interfaces'

// Constants
import {
  sharedFacebookIconProps,
  sharedWhatsappIconProps
} from '@components/Footer/Sections/constants'
import {
  WHATSAPP_CONTACT_URL_01,
  WHATSAPP_CONTACT_URL_02,
  WHATSAPP_CONTACT_NUMBER_01,
  WHATSAPP_CONTACT_NUMBER_02,
  CONTACT_FACEBOOK_PAGE_URL_01,
  CONTACT_FACEBOOK_PAGE_URL_02,
  CONTACT_FACEBOOK_PAGE_NAME_01,
  CONTACT_FACEBOOK_PAGE_NAME_02
} from '@config/envs'

const socialNetworksNavigation: NavigationLink[] = [
  {
    navigationTitle: 'Redes Sociales',
    navigationItems: [
      {
        path: CONTACT_FACEBOOK_PAGE_URL_01 as string,
        title: CONTACT_FACEBOOK_PAGE_NAME_01 as string,
        icon: <Facebook {...sharedFacebookIconProps} />
      },
      {
        path: CONTACT_FACEBOOK_PAGE_URL_02 as string,
        title: CONTACT_FACEBOOK_PAGE_NAME_02 as string,
        icon: <Facebook {...sharedFacebookIconProps} />
      },
      {
        path: WHATSAPP_CONTACT_URL_01 as string,
        title: WHATSAPP_CONTACT_NUMBER_01 as string,
        icon: <BrandWhatsapp {...sharedWhatsappIconProps} />
      },
      {
        path: WHATSAPP_CONTACT_URL_02 as string,
        title: WHATSAPP_CONTACT_NUMBER_02 as string,
        icon: <BrandWhatsapp {...sharedWhatsappIconProps} />
      }
    ]
  }
]

export default socialNetworksNavigation

// Components
import Facebook from '@assets/icons/facebook'
import BrandWhatsapp from '@assets/icons/brand-whatsapp'

// Interfaces
import { IconProps } from '@components/Icon/interfaces'
import { NavigationLink } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

// Constants
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

export const sharedFacebookIconProps: IconProps = {
  size: 'sm',
  className: 'stroke-3 text-[#3b5998] dark:bg-white'
}

export const sharedWhatsappIconProps: IconProps = {
  size: 'sm',
  className: 'stroke-3 text-lime-700 dark:!text-lime-300'
}

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

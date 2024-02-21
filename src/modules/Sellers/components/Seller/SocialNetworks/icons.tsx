// Components
import Twitter from '@assets/icons/twitter'
import LinkedIn from '@assets/icons/linkedin'
import Facebook from '@assets/icons/facebook'
import Instagram from '@assets/icons/instagram'
import BrandWhatsapp from '@assets/icons/brand-whatsapp'

// Types
import type { ReactNode } from 'react'
import type { SocialNetworkType, ExtraSocialNetworkType } from '@modules/Sellers/api/types'
import FacebookMessenger from '@root/src/assets/icons/facebook-messenger'

export const TWITTER = 'twitter'
export const FACEBOOK = 'facebook'
export const LINKEDIN = 'linkedin'
export const WHATSAPP = 'whatsapp'
export const MESSENGER = 'messenger'
export const INSTAGRAM = 'instagram'

// Social network icons
const icons: Record<SocialNetworkType | ExtraSocialNetworkType, ReactNode> = {
  [TWITTER]: <Twitter size="sm" className="text-[#1DA1F2] dark:bg-white" />,
  [LINKEDIN]: <LinkedIn size="sm" className="text-[#0A66C2] dark:bg-white" />,
  [FACEBOOK]: <Facebook size="sm" className="text-[#3b5998] dark:bg-white" />,
  [INSTAGRAM]: <Instagram size="sm" className="text-[#F56040] dark:bg-white" />,
  [WHATSAPP]: <BrandWhatsapp size="sm" className="text-[#128c7e] dark:bg-white" />,
  [MESSENGER]: <FacebookMessenger size="sm" className="text-[#00B2FF] dark:bg-white" />
}

export default icons

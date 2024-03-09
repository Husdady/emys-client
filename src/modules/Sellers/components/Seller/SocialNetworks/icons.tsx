// Components
import Twitter from '@components/Icons/Twitter'
import LinkedIn from '@components/Icons/Linkedin'
import Facebook from '@components/Icons/Facebook'
import Instagram from '@components/Icons/Instagram'
import BrandWhatsapp from '@components/Icons/BrandWhatsapp'

// Types
import type { ReactNode } from 'react'
import type { SocialNetworkType, ExtraSocialNetworkType } from '@modules/Sellers/api/types'
import FacebookMessenger from '@components/Icons/FacebookMessenger'

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

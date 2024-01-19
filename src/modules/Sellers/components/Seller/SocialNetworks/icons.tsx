// Components
import Twitter from '@assets/icons/twitter'
import LinkedIn from '@assets/icons/linkedin'
import Facebook from '@assets/icons/facebook'
import Instagram from '@assets/icons/instagram'

// Types
import type { ReactNode } from 'react'
import type { SocialNetworkType } from '@modules/Sellers/api/types'

// Social network icons
const icons: Record<SocialNetworkType, ReactNode> = {
  twitter: <Twitter size="sm" className="text-[#1DA1F2] dark:bg-white" />,
  linkedin: <LinkedIn size="sm" className="text-[#0A66C2] dark:bg-white" />,
  facebook: <Facebook size="sm" className="text-[#3b5998] dark:bg-white" />,
  instagram: <Instagram size="sm" className="text-[#F56040] dark:bg-white" />
}

export default icons

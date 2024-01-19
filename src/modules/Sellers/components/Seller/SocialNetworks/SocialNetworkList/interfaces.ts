// Types
import type { ReactNode } from 'react'

// Interfaces
import { SocialNetwork } from '@modules/Sellers/api/interfaces'

export interface SocialNetworkListProps {
  socialNetworkIcon: ReactNode
  socialNetworks: SocialNetwork[]
}

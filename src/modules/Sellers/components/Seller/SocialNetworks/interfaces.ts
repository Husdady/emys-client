// Types
import type { ReactNode } from 'react'

// Interfaces
import { SocialNetwork } from '@modules/Sellers/api/interfaces'

export interface SocialNetworkItem extends Pick<SocialNetwork, 'id' | 'name'> {
  icon: ReactNode
}

export interface SocialNetworksProps {
  sellerFullname: string
  socialNetworks?: SocialNetwork[] | null
}

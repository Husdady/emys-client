// Hooks
import { useMemo } from 'react'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { tagProps } from './constants'

export type Params = Pick<Seller, 'status' | 'socialNetworks'>

/**
 * Hook for implements the logic of the Status component
 * @param {Params} params Receive a 'status' and 'socialNetworks'
 */
export default function useStatus({ status, socialNetworks }: Params) {
  // Check if the Seller has Social Networks Accounts
  const hasSocialNetworksAccounts = useMemo(() => {
    if (!Array.isArray(socialNetworks)) return false

    // Get id of each Social Network
    const socialNetworksId = socialNetworks.map((socialNetwork) => socialNetwork.id)

    return !isEmptyArray(socialNetworksId) // Check if has items
  }, [socialNetworks])

  return {
    tag: tagProps[status as keyof typeof tagProps],
    hasSocialNetworksAccounts: hasSocialNetworksAccounts
  }
}

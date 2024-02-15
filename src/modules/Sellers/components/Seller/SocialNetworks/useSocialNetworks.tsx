// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'

// Components
import SocialNetworkList from './SocialNetworkList'

// Hooks
import { useCallback, useMemo } from 'react'
import useModal from '@hooks/useModal'

// Interfaces
import { SocialNetwork } from '@modules/Sellers/api/interfaces'
import { SocialNetworkItem, SocialNetworksProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { socialNetworkList } from './constants'

/**
 * Hook for implements the logic of the SocialNetworks
 */
export default function useSocialNetworks({ sellerFullname, socialNetworks }: SocialNetworksProps) {
  const { showModal } = useModal()

  // Callback for check if the Social Network has accounts
  const checkIfSocialNetowrkHasAccounts = useCallback((socialNetwork: SocialNetworkItem) => {
    // Get social network name in lowercase
    const socialNetworkName = socialNetwork.name.toLowerCase()

    // Get accounts based the social network
    const items = socialNetworks?.filter((item) => item.type === socialNetworkName)

    // Social network has accounts
    return !(!Array.isArray(items) || isEmptyArray(items))
  }, [])

  // Callback for show the list of accounts of a social network
  const handleShowAccountOfSocialNetwork = useCallback(
    (socialNetwork: SocialNetworkItem) => () => {
      // Social network has accounts
      const hasAccounts = checkIfSocialNetowrkHasAccounts(socialNetwork)

      if (!hasAccounts) {
        return showFloatWarningMessage(
          `${sellerFullname} no posee cuentas en ${socialNetwork.name}`
        )
      }

      // Get social network name in lowercase
      const socialNetworkName = socialNetwork.name.toLowerCase()

      // Get accounts based the social network
      const items = socialNetworks?.filter((item) => item.type === socialNetworkName)

      showModal({
        width: 500,
        icon: socialNetwork.icon,
        isShowingAcceptButton: false,
        className: 'modal-seller-social-networks',
        title: `Cuentas disponibles de ${socialNetwork.name} del vendedor ${sellerFullname}`,
        cancelButtonProps: {
          title: 'Ocultar modal'
        },
        content: (
          <SocialNetworkList
            socialNetworkIcon={socialNetwork.icon}
            socialNetworks={items as SocialNetwork[]}
          />
        )
      })
    },
    [socialNetworks, sellerFullname]
  )

  // Filter only social networks that have an accounts
  const filteredSocialNetworkList = useMemo(() => {
    return socialNetworkList.filter(checkIfSocialNetowrkHasAccounts)
  }, [])

  return {
    socialNetworkList: filteredSocialNetworkList,
    handleShowAccountOfSocialNetwork: handleShowAccountOfSocialNetwork
  }
}

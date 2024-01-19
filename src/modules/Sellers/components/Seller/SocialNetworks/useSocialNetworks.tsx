// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'

// Components
import SocialNetworkList from './SocialNetworkList'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

// Interfaces
import { SocialNetworkItem, SocialNetworksProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants

/**
 * Hook for implements the logic of the SocialNetworks
 */
export default function useSocialNetworks({ sellerFullname, socialNetworks }: SocialNetworksProps) {
  const { showModal } = useModal()

  // Callback for show the list of accounts of a social network
  const handleShowAccountOfSocialNetwork = useCallback(
    (socialNetwork: SocialNetworkItem) => () => {
      // Get social network name in lowercase
      const socialNetworkName = socialNetwork.name.toLowerCase()

      // Get accounts based the social network
      const items = socialNetworks?.filter((item) => item.type === socialNetworkName)

      if (!Array.isArray(items) || isEmptyArray(items)) {
        return showFloatWarningMessage(
          `${sellerFullname} no posee cuentas en ${socialNetwork.name}`
        )
      }

      showModal({
        width: 500,
        icon: socialNetwork.icon,
        isShowingAcceptButton: false,
        className: 'modal-seller-social-networks',
        title: `Cuentas disponibles de ${socialNetwork.name} del vendedor ${sellerFullname}`,
        cancelButtonProps: {
          title: 'Ocultar modal'
        },
        content: <SocialNetworkList socialNetworks={items} socialNetworkIcon={socialNetwork.icon} />
      })
    },
    [socialNetworks, sellerFullname]
  )

  return {
    handleShowAccountOfSocialNetwork: handleShowAccountOfSocialNetwork
  }
}

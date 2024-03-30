// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'

// Components
import SocialNetworkList from './SocialNetworkList'

// Hooks
import { useCallback } from 'react'
import useModal from '@root/src/config/store/states/modal/useModal'

// Interfaces
import { SocialNetwork } from '@modules/Sellers/api/interfaces'
import { SocialNetworkItem, SocialNetworksProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

/**
 * Hook for implements the logic of the SocialNetworks
 * @param {SocialNetworksProps} data Receive a 'socialNetworks' and 'sellerFullname'
 */
export default function useSocialNetworks({ socialNetworks, sellerFullname }: SocialNetworksProps) {
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

  // Callback for define the title popup of Button
  const getTitlePopup = useCallback(
    (socialNetwork: SocialNetworkItem) => {
      // Social network has accounts
      const hasAccounts = checkIfSocialNetowrkHasAccounts(socialNetwork)

      if (hasAccounts) {
        return `Mostrar cuentas de ${socialNetwork.name} de ${sellerFullname}`
      }

      return `${sellerFullname} no posee cuentas en ${socialNetwork.name}`
    },
    [sellerFullname]
  )

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

  return {
    getTitlePopup: getTitlePopup,
    checkIfSocialNetowrkHasAccounts: checkIfSocialNetowrkHasAccounts,
    handleShowAccountOfSocialNetwork: handleShowAccountOfSocialNetwork
  }
}

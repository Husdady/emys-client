// Librarys
import { showFloatInfoMessage } from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'
import { SocialNetworkItem } from '@modules/Sellers/components/Seller/SocialNetworks/interfaces'
import {
  FACEBOOK,
  INSTAGRAM,
  MESSENGER,
  TWITTER,
  WHATSAPP
} from '@modules/Sellers/components/Seller/SocialNetworks/icons'

// Utils
import capitalize from '@utils/capitalize'
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the SocialNetworks component
 * @param {Product} product Product
 */
export default function useSocialNetworks(product: Product) {
  // Callback for share the product in a Social Network
  const share = useCallback(
    (socialNetwork: SocialNetworkItem) => () => {
      const social = socialNetwork.name // Get the social network name
      const href = encodeURIComponent(window.location.href) // Get the url of the product

      let url = '' // Define the url

      // Share in Facebook
      if (social === FACEBOOK) {
        // Define the Facebook URL
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${href}`
        url = facebookUrl // Update url
      }

      // Share in Whatsapp
      if (social === WHATSAPP) {
        // Define the Whatsapp URL
        const whatsappUrl = `https://api.whatsapp.com/send?text=${href}`
        url = whatsappUrl // Update url
      }

      // Share in Twitter
      if (social === TWITTER) {
        // Define the Twitter URL
        const twitterUrl = `https://twitter.com/intent/tweet?url=${href}`
        url = twitterUrl // Update url
      }

      // Check if is a special Social Network
      const isSpecialSocialNetwork = [MESSENGER, INSTAGRAM].includes(social)

      // This Social Network cannot share easily
      if (isSpecialSocialNetwork) {
        void navigator.clipboard.writeText(window.location.href)

        showFloatInfoMessage(
          `La url se ha copiado al portapapeles, pega esta url para compartir a travez de ${capitalize(
            social
          )}`
        )
      }

      // Open valid url
      if (!isEmptyString(url)) {
        window.open(url, '_blank')
      }
    },
    []
  )

  return {
    share: share
  }
}

// Components
import Button from '@components/Button'

// Hooks
import useSocialNetworks from './useSocialNetworks'

// Interfaces
import { SocialNetworksProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

export default function SocialNetworks(props: SocialNetworksProps) {
  const {
    getTitlePopup,
    socialNetworkList,
    checkIfSocialNetowrkHasAccounts,
    handleShowAccountOfSocialNetwork
  } = useSocialNetworks(props)

  // Empty accounts of Social Networks
  if (isEmptyArray(socialNetworkList)) return null

  return (
    <section className="seller-social-networks">
      <ul className="social-network-list flex items-center justify-start gap-y-2.5 gap-x-2">
        {socialNetworkList.map((socialNetwork) => (
          <li key={socialNetwork.id}>
            <Button
              title=""
              icon={socialNetwork.icon}
              titlePopup={getTitlePopup(socialNetwork)}
              onClick={handleShowAccountOfSocialNetwork(socialNetwork)}
              disabled={!checkIfSocialNetowrkHasAccounts(socialNetwork)}
              className="rounded-full !p-2 enabled:hover:bg-gray-200 dark:bg-gray-500 dark:enabled:hover:bg-gray-400"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

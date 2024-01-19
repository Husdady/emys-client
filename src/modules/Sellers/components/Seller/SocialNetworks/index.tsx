// Components
import Button from '@components/Button'

// Hooks
import useSocialNetworks from './useSocialNetworks'

// Interfaces
import { SocialNetworksProps } from './interfaces'

// Constants
import { socialNetworkList } from './constants'

export default function SocialNetworks(props: SocialNetworksProps) {
  const { handleShowAccountOfSocialNetwork } = useSocialNetworks(props)

  return (
    <section className="seller-social-networks px-4">
      <ul className="social-network-list flex items-center justify-center gap-y-2.5 gap-x-2">
        {socialNetworkList.map((socialNetwork) => (
          <li key={socialNetwork.id}>
            <Button
              title=""
              icon={socialNetwork.icon}
              onClick={handleShowAccountOfSocialNetwork(socialNetwork)}
              className="rounded-full !p-2 hover:bg-gray-200 dark:bg-gray-500 dark:hover:bg-gray-400"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

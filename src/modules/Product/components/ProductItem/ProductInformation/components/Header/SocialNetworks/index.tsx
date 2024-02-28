// Components
import Button from '@components/Button'

// Hooks
import useSocialNetworks from './useSocialNetworks'

// Constants
import { socialNetworkList } from './constants'

export default function SocialNetworks() {
  const { share } = useSocialNetworks()

  return (
    <section className="product-share-by-social-networks flex items-center gap-x-2 flex-wrap gap-y-1.5">
      <span className="font-lexend dark:text-gray-300">Compartir producto en:</span>

      <ul className="social-network-list flex flex-wrap items-center justify-start gap-x-0.5">
        {socialNetworkList.map((socialNetwork) => (
          <li key={socialNetwork.id} className="social-network-item">
            <Button
              title=""
              icon={socialNetwork.icon}
              onClick={share(socialNetwork)}
              titlePopup={`Compartir a travez de ${socialNetwork.name}`}
              className="btn-social-network !p-1 bg-transparent hover:bg-gray-200/50 rounded-md dark:hover:bg-gray-600/200"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

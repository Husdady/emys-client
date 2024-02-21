// Components
import Button from '@components/Button'

// Hooks
import useSocialNetworks from './useSocialNetworks'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Constants
import { socialNetworkList } from './constants'

export default function SocialNetworks(props: Product) {
  const { share } = useSocialNetworks(props)

  return (
    <section className="product-share-by-social-networks flex items-center gap-x-2 flex-wrap">
      <span className="font-lexend">Compartir producto en:</span>

      <ul className="social-network-list flex items-center justify-start gap-y-2.5 gap-x-0.5">
        {socialNetworkList.map((socialNetwork) => (
          <li key={socialNetwork.id}>
            <Button
              title=""
              icon={socialNetwork.icon}
              onClick={share(socialNetwork)}
              className="!p-1 bg-transparent hover:bg-gray-200/50 rounded-md"
              titlePopup={`Compartir a travez de ${socialNetwork.name}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

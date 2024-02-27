// Components
import Button from '@components/Button'

// Hooks
import useSocialNetworks from './useSocialNetworks'

// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

// Constants
import { socialNetworkList } from './constants'

export default function SocialNetworks(props: ProductByCode) {
  const { share } = useSocialNetworks(props)

  return (
    <section className="product-share-by-social-networks flex items-center gap-x-2 flex-wrap">
      <span className="font-lexend dark:text-gray-300">Compartir producto en:</span>

      <ul className="social-network-list flex flex-wrap items-center justify-start gap-y-2.5 gap-x-0.5">
        {socialNetworkList.map((socialNetwork) => (
          <li key={socialNetwork.id}>
            <Button
              title=""
              icon={socialNetwork.icon}
              onClick={share(socialNetwork)}
              className="!p-1 bg-transparent hover:bg-gray-200/50 rounded-md dark:hover:bg-gray-600/200"
              titlePopup={`Compartir a travez de ${socialNetwork.name}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

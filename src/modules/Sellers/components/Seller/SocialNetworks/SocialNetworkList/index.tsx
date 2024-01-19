// Interfaces
import Link from '@root/src/components/Link'
import { SocialNetworkListProps } from './interfaces'

export default function SocialNetworkList({
  socialNetworks,
  socialNetworkIcon
}: SocialNetworkListProps) {
  return (
    <div className="seller-social-networks">
      <ul className="seller-social-network-list flex flex-col gap-y-2">
        {socialNetworks.map((socialNetwork) => (
          <li
            key={socialNetwork.id}
            className="seller-social-network-item flex items-center bg-gray-100 text-lg px-2.5 py-1.5 gap-x-1.5 rounded-lg dark:bg-gray-700"
          >
            {socialNetworkIcon}

            <Link
              href={socialNetwork.url}
              title={`Ir a ${socialNetwork.name}`}
              className="seller-social-network-link font-poppins text-blue-600 !underline dark:text-sky-300 dark:hover:text-sky-200"
            >
              {socialNetwork.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

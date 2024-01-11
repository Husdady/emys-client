// Librarys
import dynamic from 'next/dynamic'

// Components
import ExternalLinkIcon from '@assets/icons/external-link'

// Constants
import { SELLER_PATH } from '@assets/data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function Header() {
  return (
    <div className="latest-registered-sellers-header px-3 max-w-[1100px] mx-auto text-center flex justify-center">
      <Link
        href={SELLER_PATH}
        title="Ir a la sección de Vendedores"
        className="flex items-center justify-center text-white hover:text-rose-100 dark:hover:text-gray-500 gap-x-3 gap-y-4 dark:text-dark-800 dark:font-semibold"
      >
        <h5 className="text-4xl font-lexend break-word">Nuestros vendedores</h5>
        <ExternalLinkIcon size="xml" />
      </Link>
    </div>
  )
}

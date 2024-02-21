// Librarys
import dynamic from 'next/dynamic'

// Components
import ExternalLink from '@assets/icons/external-link'

// Constants
import { OMNILIFE_ENTREPRENEUR_URL } from '@config/envs'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function ButtonLink() {
  return (
    <Link
      title="Navegar al formulario"
      href={OMNILIFE_ENTREPRENEUR_URL as string}
      className="btn-affiliate-as-entrepeuner rounded-xl font-semibold font-poppins text-center bg-sky-200 text-sky-900 py-2.5 px-4 hover:bg-emerald-200 flex items-center gap-x-1.5 justify-center gap-y-1"
    >
      <ExternalLink size="md" />
      <span className="leading-tight">Quiero afiliarme como Empresario Omnilife</span>
    </Link>
  )
}

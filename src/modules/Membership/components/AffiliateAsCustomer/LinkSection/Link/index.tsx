// Librarys
import dynamic from 'next/dynamic'

// Components
import ExternalLink from '@components/Icons/ExternalLink'

// Constants
import { OMNILIFE_CLIENT_URL } from '@config/envs'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function ButtonLink() {
  return (
    <Link
      title="Navegar al formulario"
      href={OMNILIFE_CLIENT_URL as string}
      className="btn-affiliate-as-customer rounded-xl font-semibold font-poppins text-center bg-amber-200 text-pink-900 py-2.5 px-4 hover:bg-amber-300 flex items-center gap-x-1.5 justify-center gap-y-1"
    >
      <ExternalLink size="md" />
      <span className="leading-tight">Quiero afiliarme como Cliente Admirable</span>
    </Link>
  )
}

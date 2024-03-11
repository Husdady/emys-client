// Librarys
import dynamic from 'next/dynamic'

// Components
import ExternalLinkIcon from '@components/Icons/ExternalLink'

// Constants
import { TESTIMONIALS_PATH } from '@data/paths'

// Dynamic Components
const HeaderLink = dynamic(() => import('@modules/Home/components/HeaderLink'))

export default function Header() {
  return (
    <HeaderLink
      href={TESTIMONIALS_PATH}
      title="Testimonios Omnilife"
      className="latest-added-testimonials-header"
      popupTitle="Ir a la sección de Testimonios Omnilife"
      linkClassName="text-gray-900 hover:text-gray-600 dark:hover:text-gray-600 dark:text-dark-800 font-semibold"
    />
  )
}

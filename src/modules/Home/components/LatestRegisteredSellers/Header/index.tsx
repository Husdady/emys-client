// Librarys
import dynamic from 'next/dynamic'

// Constants
import { SELLERS_PATH } from '@data/paths'

// Dynamic Components
const HeaderLink = dynamic(() => import('@modules/Home/components/HeaderLink'))

export default function Header() {
  return (
    <HeaderLink
      href={SELLERS_PATH}
      title="Nuestros vendedores"
      popupTitle="Ir a la sección de Vendedores"
      className="latest-registered-sellers-header"
      linkClassName="text-white hover:text-rose-100 dark:hover:text-gray-500 dark:text-dark-800 dark:font-semibold"
    />
  )
}

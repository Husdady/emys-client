// Components
import SocialNetworks from './SocialNetworks'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function Header(product: Product) {
  const visits = product.totalVisits ?? 1

  return (
    <header className="product-information-header border-b border-gray-300 flex items-end justify-between pb-1.5 mb-3 flex-wrap dark:border-gray-500 gap-y-1.5 pe-2">
      <SocialNetworks />

      <i className="total-visits flex items-center">
        {visits} visita{visits > 1 ? 's' : ''}
      </i>
    </header>
  )
}

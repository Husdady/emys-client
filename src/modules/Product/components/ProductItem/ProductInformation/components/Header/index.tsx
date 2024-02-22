// Components
import SocialNetworks from './SocialNetworks'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function Header(product: Product) {
  const visits = product.totalVisits ?? 1

  return (
    <header className="product-information-header border-b border-gray-300 flex justify-between pb-1.5 mb-3 flex-wrap dark:border-gray-500">
      <SocialNetworks {...product} />

      <i className="total-visits flex items-center">
        {visits} visita{visits > 1 ? 's' : ''}
      </i>
    </header>
  )
}

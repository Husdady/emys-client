// Components
import SocialNetworks from './SocialNetworks'

// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

export default function Header(product: ProductByCode) {
  const visits = product.totalVisits ?? 1

  return (
    <header className="product-information-header border-b border-gray-300 flex justify-between pb-1.5 mb-3 flex-wrap dark:border-gray-500 gap-y-1.5">
      <SocialNetworks {...product} />

      <i className="total-visits flex items-center">
        {visits} visita{visits > 1 ? 's' : ''}
      </i>
    </header>
  )
}

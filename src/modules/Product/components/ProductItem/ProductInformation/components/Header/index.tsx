// Components
import SocialNetworks from './SocialNetworks'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function Header(product: Product) {
  return (
    <header className="product-information-header border-b border-gray-300 flex justify-between pb-1.5 mb-3 flex-wrap">
      <SocialNetworks {...product} />
      <i className="total-visits flex items-center">{product.totalVisits ?? 1} visitas</i>
    </header>
  )
}

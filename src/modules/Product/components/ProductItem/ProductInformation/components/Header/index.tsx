// Components
import { memo } from 'react'
import SocialNetworks from './SocialNetworks'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

function Header(product: Product) {
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

export default memo(Header, (prevProps, nextProps) => {
  return nextProps.totalVisits === nextProps.totalVisits
})

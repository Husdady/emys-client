// Librarys
import { Suspense } from 'react'

// Components
import InputSearch from './InputSearch'
import Placeholder from './Placeholder'
import SellerPlaceholder from '@modules/Sellers/components/Seller/Placeholder'

// Interfaces
import { SellersProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { SELLER_ITEMS_ID } from './constants'

// Lazy Components
const Seller = lazy(() => import('@modules/Sellers/components/Seller'))

export default function Sellers({ sellers, isLoading }: SellersProps) {
  return (
    <section id="sellers" className="mt-[1.5rem] mx-auto max-w-[1200px]">
      {isLoading && <Placeholder />}

      <InputSearch sellers={sellers} setResults={() => null} />

      {!isLoading && Array.isArray(sellers) && !isEmptyArray(sellers) && (
        <ul
          id={SELLER_ITEMS_ID}
          className="seller-items mt-[2.5rem] flex gap-y-2.5 sm:gap-y-3.5 gap-x-2 pb-[2.5rem] relative sm:gap-x-3 justify-center flex-wrap"
        >
          {sellers.map((seller) => (
            <li key={seller.id} className="seller-item">
              <Suspense fallback={<SellerPlaceholder />}>
                <Seller {...seller} />
              </Suspense>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

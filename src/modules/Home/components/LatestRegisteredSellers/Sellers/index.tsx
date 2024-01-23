// Librarys
import { Suspense } from 'react'

// Components
import InputSearch from './InputSearch'
import Placeholder from './Placeholder'
import SellerPlaceholder from '@modules/Sellers/components/Seller/Placeholder'

// Hooks
import useSellers from './useSellers'

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
  const { results, setResults } = useSellers({ sellers, isLoading })

  return (
    <section id="sellers" className="mt-[1.5rem] mx-auto max-w-[1200px]">
      <InputSearch sellers={sellers} setResults={setResults} />

      {isLoading && <Placeholder />}

      {!isLoading && Array.isArray(sellers) && !isEmptyArray(sellers) && (
        <ul
          id={SELLER_ITEMS_ID}
          className="seller-items mt-[2rem] lg:mt-[2.15rem] flex gap-y-2.5 sm:gap-y-3.5 gap-x-2 pb-[3rem] relative sm:gap-x-2.5 justify-center flex-wrap"
        >
          {results.map((seller) => (
            <li key={seller.id} className="seller-item min-w-[350px] max-w-[350px]">
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

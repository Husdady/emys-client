// Components
import SellerPlaceholder from '@modules/Sellers/components/Seller/Placeholder'

// Utils
import createList from '@utils/createList'

// Constants
import { LIMIT_LATEST_SELLERS } from '@modules/Home/components/LatestRegisteredSellers/constants'

export default function Placeholder() {
  return (
    <ul className="my-[2.5rem] seller-items flex !flex-wrap items-center justify-center pb-4 gap-y-2.5 sm:gap-y-3.5 gap-x-2 sm:gap-x-2.5">
      {createList(LIMIT_LATEST_SELLERS).map((i) => (
        <li key={String(i)} className="seller-item">
          <SellerPlaceholder />
        </li>
      ))}
    </ul>
  )
}

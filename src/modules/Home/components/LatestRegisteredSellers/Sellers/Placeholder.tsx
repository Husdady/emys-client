// Components
import SellerPlaceholder from '@modules/Sellers/components/Seller/Placeholder'

// Utils
import createList from '@utils/createList'

// Constants
import { LIMIT_LATEST_SELLERS } from '@modules/Home/components/LatestRegisteredSellers/constants'

export default function Placeholder() {
  return (
    <ul className="mt-[2.5rem] seller-items flex flex-wrap sm:flex-nowrap items-start overflow-x-auto px-3 pb-4 gap-y-3.5 gap-x-3 sm:gap-x-3.5">
      {createList(LIMIT_LATEST_SELLERS).map((i) => (
        <li key={String(i)} className="seller-item">
          <SellerPlaceholder />
        </li>
      ))}
    </ul>
  )
}

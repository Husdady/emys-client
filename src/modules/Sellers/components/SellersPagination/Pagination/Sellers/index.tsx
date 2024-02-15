// Librarys
import { memo, useMemo } from 'react'

// Components
import Empty from './Empty'
import Placeholder from './Placeholder'
import Seller from '@modules/Sellers/components/Seller'

// Interfaces
import { SellersProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'

function Sellers({ docs, isFetching }: SellersProps) {
  // Get Sellers from docs
  const sellers = useMemo(() => {
    if (isUndefined(docs)) return []
    return docs
  }, [docs])

  if (isFetching) return <Placeholder />
  if (isEmptyArray(sellers)) return <Empty />

  return (
    <ul className="seller-list">
      {sellers.map((seller, i) => (
        <li key={isUndefined(seller.id) ? String(i) : seller.id} className="seller-item">
          <Seller {...seller} />
        </li>
      ))}
    </ul>
  )
}

export default memo(Sellers, (prevProps, nextProps) => {
  return prevProps.isFetching === nextProps.isFetching
})

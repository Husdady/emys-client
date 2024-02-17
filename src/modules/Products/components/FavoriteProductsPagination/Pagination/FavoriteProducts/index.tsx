// Librarys
import { memo, useMemo } from 'react'

// Components
import Empty from './Empty'
import Placeholder from './Placeholder'
import Product from '@modules/Products/components/Product'

// Interfaces
import { ProductsProps } from '@modules/Products/components/ProductsPagination/Pagination/Products/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'

function FavoriteProducts({ docs, isFetching }: ProductsProps) {
  // Get Products from docs
  const products = useMemo(() => {
    if (isUndefined(docs)) return []
    return docs
  }, [docs])

  if (isFetching) return <Placeholder />
  if (isEmptyArray(products)) return <Empty />

  return (
    <ul className="favorite-product-list">
      {products.map((product, i) => (
        <li
          key={isUndefined(product.id) ? String(i) : product.id}
          className="favorite-product-item"
        >
          <Product {...product} />
        </li>
      ))}
    </ul>
  )
}

export default memo(FavoriteProducts, (prevProps, nextProps) => {
  return prevProps.isFetching === nextProps.isFetching
})

// Librarys
import { memo } from 'react'

// Components
import Product from '@modules/Products/components/Product'

// Hooks
import useValidateRequest from '@hooks/useValidateRequest'

// Interfaces
import { ProductListProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import arraysAreEqual from '@utils/arraysAreEqual'

function ProductList({ products }: ProductListProps) {
  const { makeRequest, stopRequest, isMakingRequest } = useValidateRequest()

  return (
    <ul className="product-list">
      {products.map((product, i) => (
        <li key={isUndefined(product.id) ? String(i) : product.id} className="product-item">
          <Product
            {...product}
            makeRequest={makeRequest}
            stopRequest={stopRequest}
            isMakingRequest={isMakingRequest}
          />
        </li>
      ))}
    </ul>
  )
}

export default memo(ProductList, (prevProps, nextProps) => {
  return arraysAreEqual(prevProps.products, nextProps.products)
})

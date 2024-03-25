// Librarys
import { memo, useMemo } from 'react'

// Components
import Empty from './Empty'
import Placeholder from './Placeholder'
import ProductList from './ProductList'

// Interfaces
import { ProductsProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'
import arraysAreEqual from '@utils/arraysAreEqual'

function Products({ docs, isFetching }: ProductsProps) {
  // Get Products from docs
  const products = useMemo(() => (Array.isArray(docs) ? docs : []), [docs])

  if (isFetching) return <Placeholder />
  if (isEmptyArray(products)) return <Empty />

  return <ProductList products={products} />
}

export default memo(Products, (prevProps, nextProps) => {
  return (
    prevProps.isFetching === nextProps.isFetching && arraysAreEqual(prevProps.docs, nextProps.docs)
  )
})

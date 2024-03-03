// Components
import { useMemo } from 'react'
import EmptyImages from './EmptyImages'
import ImageWrapper from './ImageWrapper'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'
import classnames from '@root/src/utils/classnames'

export default function ProductImages(product: Product) {
  // Check if the product has invalid images
  const hasInvalidImages = useMemo(() => {
    const images = product.images
    return isEmptyArray(images) || !Array.isArray(images)
  }, [product.images])

  return (
    <aside
      className={classnames([
        hasInvalidImages ? 'flex items-center justify-center' : null,
        'product-images bg-white pt-3.5 pb-4 px-4 font-poppins rounded shadow-lg min-h-[35rem] dark:shadow-none dark:bg-gray-900'
      ])}
    >
      {hasInvalidImages ? <EmptyImages /> : <ImageWrapper {...product} />}
    </aside>
  )
}

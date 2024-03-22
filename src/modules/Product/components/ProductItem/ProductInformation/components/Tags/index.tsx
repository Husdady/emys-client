// Librarys
import { memo } from 'react'
import { Tag } from 'antd/lib'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

function ProductTags(product: Product) {
  const tags = product.tags

  // Validates product tags
  if (!Array.isArray(tags) && isEmptyArray(tags)) {
    return null
  }

  return (
    <section className="product-tags-wrapper sm:mt-4 mb-5 xl:mt-2.5 xl:mb-3.5">
      <h5 className="mb-2 font-semibold text-gray-600 dark:text-gray-300 text-base">Etiquetas:</h5>

      <ul className="product-tags flex flex-wrap gap-x-1.5 gap-y-1">
        {product.tags.map((tag, i) => (
          <li key={String(i)} className="product-tag-item">
            <Tag
              title={tag}
              className="m-0 font-poppins dark:border-gray-500 dark:text-gray-300 dark:bg-gray-700"
            >
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default memo(ProductTags, (prevProps, nextProps) => {
  return prevProps.tags === nextProps.tags
})

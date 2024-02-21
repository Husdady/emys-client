// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function ProductName({ name, isInStock }: Pick<Product, 'name' | 'isInStock'>) {
  return (
    <span
      className={classnames([
        !isInStock ? 'line-through text-gray-500 dark:text-gray-400' : 'dark:text-gray-300',
        'product-name text-lg font-lexend block text-center leading-5'
      ])}
    >
      {name}
    </span>
  )
}

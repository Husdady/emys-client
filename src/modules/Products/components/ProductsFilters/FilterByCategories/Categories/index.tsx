// Librarys
import { Tag } from 'antd/lib'

// Hooks
import useCategories from './useCategories'

// Interfaces
import { CategoriesProps } from '../interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { DISABLE_CATEGORY_TITLE } from '../constants'

export default function Categories({
  categories,
  isActiveCategory,
  toggleCategoryId
}: CategoriesProps) {
  const { categoriesRef, isTabletScreen } = useCategories()

  return (
    <ul ref={categoriesRef} className="product-categories flex flex-wrap gap-1.5 mt-2.5">
      {categories.map((category, i) => (
        <li key={(category.value as string) ?? String(i)} className="product-category-item">
          <Tag
            role="button"
            onClick={toggleCategoryId(category.value as string)}
            title={
              !isTabletScreen && isActiveCategory(category.value as string)
                ? DISABLE_CATEGORY_TITLE
                : `Marcar categoría '${category.label}'`
            }
            className={classnames([
              isActiveCategory(category.value as string)
                ? '!bg-blue-500 text-white dark:!bg-pink-700 border-blue-400 dark:!border-pink-500 cursor-default'
                : null,
              'product-category m-0 font-poppins dark:border-gray-500 dark:text-gray-300 dark:bg-gray-700 text-[0.8rem] py-1 px-2.5 hover:bg-gray-200/60 dark:hover:text-white dark:hover:bg-gray-600'
            ])}
          >
            {category.label}
          </Tag>
        </li>
      ))}
    </ul>
  )
}

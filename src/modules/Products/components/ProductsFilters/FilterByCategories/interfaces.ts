// Interfaces
import { GroupRadioButtonProps } from '@components/GroupRadioButton/interfaces'

export interface FilterByCategoriesProps {
  productType?: string
  isActiveCategory: (categoryId: string) => boolean
  toggleCategoryId: (categoryId: string) => () => void
}

export interface CategoriesProps extends FilterByCategoriesProps {
  categories: GroupRadioButtonProps['options']
}

// Types
import type { ProductType } from '@modules/Products/api/types'

// Interfaces
import { TimeStamps } from '@libs/axios/interfaces'

export interface Category extends TimeStamps {
  id: string
  name: string
  type: ProductType
}

export interface CategoriesList {
  categoryList: Category[]
}

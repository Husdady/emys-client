// Types
import type { ProductType } from '@modules/Products/api/types'

// Interfaces
import { TimeStamps } from '@libs/axios/interfaces'
import { PaginationArgs } from '@libs/graphql/interfaces'

export interface Category extends TimeStamps {
  id: string
  name: string
  type: ProductType
}

export interface CategoryList {
  categoryList: Category[]
}

export interface CategoryListArgs extends PaginationArgs {
  type?: string
}

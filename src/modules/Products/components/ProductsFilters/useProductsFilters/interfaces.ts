// Interfaces
import { ProductsPaginationArgs } from '@modules/Products/api/interfaces'

export interface ProductsFiltersState
  extends Pick<ProductsPaginationArgs, 'sortBy' | 'sortType' | 'categories'> {
  code?: string
  maker?: string
  origin?: string
  maxPrice?: string
  minPrice?: string
  isInStock?: string
  totalUnits?: string
  productName?: string
}

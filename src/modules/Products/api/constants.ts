// Interfaces
import { ProductsPaginationArgs } from './interfaces'

// Constants
import { QUERY, ALLOWED_QUERY_PARAMS } from '@libs/graphql/constants'

// Constants
export const LIMIT = 60
export const POPULATE = true
export const GRAMS = 'grams'
export const KILOGRAMS = 'kilograms'
export const SEYTU_TYPE = 'seytu'
export const OMNILIFE_TYPE = 'omnilife'
export const PRODUCT_TYPE = 'product'
export const SUNS_CURRENCY = 'suns'
export const DOLLARS_CURRENCY = 'dollars'
export const LIST_TYPE = 'list'
export const TEXT_TYPE = 'text'
export const LARGE_TEXT_TYPE = 'large-text'

export const PARAMS = [
  'populate',
  'sku',
  'code',
  'maker',
  'origin',
  'minPrice',
  'maxPrice',
  'isInStock',
  'totalUnits',
  'categories',
  'productName',
  ...ALLOWED_QUERY_PARAMS
]

export const DEFAULT_QUERY: ProductsPaginationArgs = {
  limit: LIMIT,
  populate: POPULATE,
  page: QUERY.page
}

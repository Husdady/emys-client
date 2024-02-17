// Interfaces
import { CategoriesPaginationArgs } from './interfaces'

// Constants
import { QUERY, ALLOWED_QUERY_PARAMS } from '@libs/graphql/constants'

export const LIMIT = 36
export const PARAMS = [...ALLOWED_QUERY_PARAMS, 'type']

export const DEFAULT_QUERY: CategoriesPaginationArgs = {
  page: QUERY.page,
  limit: LIMIT
}

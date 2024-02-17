// Interfaces
import { TestimonialsPaginationArgs } from './interfaces'

// Constants
import { UBIGEO_PARAMS } from '@modules/Ubigeo/api/constants'
import { QUERY, ALLOWED_QUERY_PARAMS } from '@libs/graphql/constants'

export const LIMIT = 10
export const PARAMS = ['authorName', ...UBIGEO_PARAMS, ...ALLOWED_QUERY_PARAMS]

export const DEFAULT_QUERY: TestimonialsPaginationArgs = {
  page: QUERY.page,
  limit: LIMIT
}

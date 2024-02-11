// Types
import type { TestimonialsPaginationArgs } from './types'

// Constants
import { UBIGEO_PARAMS } from '@modules/Ubigeo/api/constants'
import { QUERY, ALLOWED_QUERY_PARAMS } from '@libs/graphql/constants'

export const LIMIT = 10

export const PARAMS = [...UBIGEO_PARAMS, ...ALLOWED_QUERY_PARAMS]

export const DEFAULT_QUERY: TestimonialsPaginationArgs = {
  page: QUERY.page,
  limit: LIMIT
}

// Interfaces
import { PaginationArgs } from '@libs/graphql/interfaces'
import { UbigeoArgs } from '@modules/Ubigeo/api/interfaces'

export interface TestimonialsFiltersState
  extends UbigeoArgs,
    Pick<PaginationArgs, 'sortBy' | 'sortType'> {
  authorName?: string
}

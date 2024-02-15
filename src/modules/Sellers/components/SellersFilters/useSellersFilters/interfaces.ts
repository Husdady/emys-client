// Interfaces
import { PaginationArgs } from '@libs/graphql/interfaces'
import { UbigeoArgs } from '@modules/Ubigeo/api/interfaces'

export interface SellersFiltersState
  extends UbigeoArgs,
    Pick<PaginationArgs, 'sortBy' | 'sortType'> {
  dni?: string
  ruc?: string
  phone?: string
  email?: string
  fullname?: string
  status?: string
}

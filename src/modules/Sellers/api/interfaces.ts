// Types
import type { SocialNetworkType } from './types'

// Interfaces
import { Image, TimeStamps } from '@libs/axios/interfaces'
import { Ubigeo, UbigeoArgs } from '@modules/Ubigeo/api/interfaces'
import { PaginationArgs, GraphQLPagination } from '@libs/graphql/interfaces'

export interface SocialNetwork extends TimeStamps {
  id: string
  url: string
  name: string
  type: SocialNetworkType
}

export interface Seller extends Ubigeo {
  id: string
  dni: string
  ruc: string | null
  code: string
  email: string
  status: string
  phone: string
  fullname: string
  photo: Image | null
  socialNetworksId?: string[] | null
  socialNetworks?: SocialNetwork[] | null
}

export interface Sellers {
  sellers: GraphQLPagination<Seller[]>
}

export interface SellersPaginationArgs extends UbigeoArgs, PaginationArgs {
  dni?: string
  ruc?: string
  phone?: string
  email?: string
  status?: string
  fullname?: string
  populate?: boolean
}

export interface PaginationArgs {
  q?: string
  page?: number
  limit?: number
  sortBy?: string
  sortType?: 'asc' | 'desc'
}

export interface MetaPagination {
  total?: number
  lastPage?: number
  currentPage?: number
  perPage?: number
  prev?: number | null
  next?: number | null
}

export interface GraphQLPagination<Docs extends object[]> {
  data?: Docs
  meta?: MetaPagination
}

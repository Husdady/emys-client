// Interfaces
import { MetaPagination } from '@libs/graphql/interfaces'
import { OnlyClassNameProp } from '@config/globalInterfaces'

export interface PageProps {
  value: number
  totalPages: number
  isFetching: boolean
  onChange?: (params: PaginationParams) => void
}

export interface PaginationParams {
  page: number
  total: number
  totalPages: number
}

export interface PaginationProps extends MetaPagination, OnlyClassNameProp {
  totalDocs?: number
  isFetching?: boolean
  onPrev?: (params: PaginationParams) => void
  onNext?: (params: PaginationParams) => void
  onChange?: (params: PaginationParams) => void
}

export interface UsePaginationParams
  extends Pick<PaginationProps, 'onPrev' | 'onNext' | 'onChange'> {
  total: number
  perPage: number
  currentPage: number
  defaultTotal: number
}

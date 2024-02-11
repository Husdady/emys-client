export interface FilterQueryParams<DefaultQuery extends object> {
  queryParamsFields: string[]
  defaultQueryParams?: DefaultQuery
}

export interface QueryResponse<DefaultQuery extends object> {
  query: DefaultQuery
  deleteQueryParam: (field: string) => void
  deleteNestedQueryParam: (path: string[]) => void
  createQueryParams: (payload: Record<string, unknown>) => void
  updateQueryParams: (payload: Record<string, unknown>) => void
}

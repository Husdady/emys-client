export interface FiltersState {
  filters: Record<string, boolean | number>
}

export interface UpdateCountPayload {
  count: number
  filterId: string
}

export interface FiltersContext extends FiltersState {
  updateCount: (payload: UpdateCountPayload) => void
}

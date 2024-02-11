export interface UseDcoumentCountParams<T = unknown> {
  data?: T[]
  filterId: string
  defaultLimit?: number
  autoIncreaseCount?: boolean
}

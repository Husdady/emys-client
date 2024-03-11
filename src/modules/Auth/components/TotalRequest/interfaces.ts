// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

export interface TotalRequestProps extends OnlyClassNameProp {
  maxRequest: number
  requestLimit: boolean
  timesRequested: number
}

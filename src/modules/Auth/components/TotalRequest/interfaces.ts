// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

export interface TotalRequestProps extends OnlyClassNameProp {
  maxRequest: number
  requestLimit: boolean
  timesRequested: number
}

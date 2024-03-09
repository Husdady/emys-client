// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

export interface TotalRequestProps extends OnlyClassNameProp {
  maxRequest: number
  requestLimit: boolean
  timesRequested: number
}

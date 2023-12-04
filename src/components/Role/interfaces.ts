// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

export interface RoleProps extends OnlyClassNameProp {
  name: string
  limit?: number
}

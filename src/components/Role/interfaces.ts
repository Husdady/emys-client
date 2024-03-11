// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

export interface RoleProps extends OnlyClassNameProp {
  name: string
  limit?: number
}

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

export interface RoleProps extends OnlyClassNameProp {
  name: string
  limit?: number
}

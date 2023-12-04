// Interfaces
import { Image, TimeStamps } from '@libs/axios/interfaces'
// import { Region } from '@modules/Ubigeo/modules/Regions/api/interfaces'
// import { Country } from '@modules/Ubigeo/modules/Countries/api/interfaces'
// import { District } from '@modules/Ubigeo/modules/Districts/api/interfaces'
// import { Province } from '@modules/Ubigeo/modules/Provinces/api/interfaces'

export interface View {
  id: string
  name: string
  path: string
}

export interface Validator {
  module: string
  moduleId: string
  moduleName: string
}

export interface Action extends TimeStamps {
  id: string
  type: string
  validator: Validator | null
  validatorId: string | null
  permissionId: string | null
  permission: Permission | null
}

export interface Permission extends TimeStamps {
  id: string
  name: string
  description: string
  action: Action | null
  actionId: string | null
}

export interface Role extends TimeStamps {
  id: string
  name: string
  views: View[]
  viewsId: string[]
  permissions: Permission[]
  permissionsId: string[]
}

export interface User extends TimeStamps {
  id: string
  fullname: string
  email: string
  status: string
  secretKey: string
  // country?: Country
  // region?: Region
  // province?: Province
  // district?: District
  profilePhoto?: Image | null
  role: Omit<Role, 'viewsId' | 'permissionsId'>
}

export interface AuthState {
  token: string | null
  user: User | null
  isAuthenticated: boolean
}

export interface AuthPayload {
  user: User
  token: string
}

export interface AuthContext extends AuthState {
  signOut: () => void
  signIn: (payload: AuthPayload) => void
  authenticate: (payload: boolean) => void
  updateUser: (payload: Partial<User>) => void
}

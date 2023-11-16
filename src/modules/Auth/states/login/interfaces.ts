export interface UserCredentials {
  email: string
  password: string
}

export interface LoginState {
  remember: boolean
  user: UserCredentials | null
}

export interface LoginPayload {
  user: UserCredentials
}

export interface LoginContext extends LoginState {
  toggleRemember: () => void
  saveLoginCredentials: (payload: LoginPayload) => void
}

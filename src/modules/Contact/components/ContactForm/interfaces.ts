// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

export interface ContactFormProps extends OnlyClassNameProp {
  innerClassName?: string
  isShowingMessage?: boolean
}

export interface ContactFormState {
  email: string
  message: string
  fullname: string
}

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

export interface ContactFormProps extends OnlyClassNameProp {
  innerClassName?: string
  isShowingMessage?: boolean
}

export interface ContactFormState {
  email: string
  message: string
  fullname: string
}

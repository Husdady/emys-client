// Interfaces
import { APIBadResponse } from '@libs/axios/interfaces'

export interface WrongVerificationProps {
  title: string
  status: APIBadResponse['status']
}

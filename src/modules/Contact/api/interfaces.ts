// Types
import type { SocialNetworkType } from './types'
import type { UseFormSetError } from 'react-hook-form'

// Interfaces
import { Ubigeo } from '@modules/Ubigeo/api/interfaces'
import { Image, TimeStamps } from '@libs/axios/interfaces'
import { ContactFormState } from '@modules/Contact/components/ContactForm/interfaces'

export interface SocialNetwork extends TimeStamps {
  id: string
  url: string
  name: string
  type: SocialNetworkType
}

export interface Seller extends Ubigeo {
  id: string
  dni: string
  ruc: string | null
  code: string
  email: string
  status: string
  phone: string
  fullname: string
  photo: Image | null
  socialNetworksId?: string[] | null
  socialNetworks?: SocialNetwork[] | null
}

export interface GlobalParams {
  signOut: () => void
  setError?: UseFormSetError<ContactFormState>
}

export interface SendMessageParams extends GlobalParams {
  data: ContactFormState
}

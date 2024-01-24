// Types
import type { UseFormSetError } from 'react-hook-form'

// Interfaces
import { Image } from '@libs/axios/interfaces'
import { Ubigeo } from '@modules/Ubigeo/api/interfaces'
import { GraphQLPagination } from '@libs/graphql/interfaces'
import { TestimonyFormState } from '@modules/Testimonials/components/TestimonyForm/interfaces'

export interface Testimony extends Ubigeo {
  id: string
  author: string
  testimony: string
  photo: Image | null
  photoId: string | null
}

export interface Testimonials {
  testimonials: GraphQLPagination<Testimony[]>
}

export interface GlobalParams {
  signOut: () => void
  hideModal: () => void
  setError?: UseFormSetError<TestimonyFormState>
}

export interface AddMyTestimonyParams extends GlobalParams {
  data: FormData
}

export interface EditMyTestimonyParams extends GlobalParams {
  data: FormData
  testimonyId: string
}

export interface DeleteMyTestimonyParams extends Omit<GlobalParams, 'setError'> {
  testimonyId: string
}

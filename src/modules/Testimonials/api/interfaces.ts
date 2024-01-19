// Interfaces
import { Image } from '@libs/axios/interfaces'
import { Ubigeo } from '@modules/Ubigeo/api/interfaces'

export interface Testimony extends Ubigeo {
  id: string
  author: string
  testimony: string
  photo: Image | null
  photoId: string | null
}

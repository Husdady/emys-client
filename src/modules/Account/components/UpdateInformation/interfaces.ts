// Interfaces
import { ChangeParams } from '@components/Upload/interfaces'

export interface UpdateInformationFormState {
  email: string
  fullname: string
  secretKey: string
  profilePhoto?: ChangeParams['file']
  previewProfilePhoto?: string
}

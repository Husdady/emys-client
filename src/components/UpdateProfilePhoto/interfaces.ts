// Interfaces
import { ChangeParams } from '@components/Upload/interfaces'

export interface UpdateProfilePhotoState {
  profilePhoto?: ChangeParams['file']
  previewProfilePhoto?: string
}

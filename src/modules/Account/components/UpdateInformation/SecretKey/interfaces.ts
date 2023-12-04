// Types
import type { UseFormSetValue } from 'react-hook-form'

// Interfaces
import { InputTextProps } from '@components/InputText/interfaces'
import { UpdateInformationFormState } from '@modules/Account/components/UpdateInformation/interfaces'

export interface SecretKeyProps extends Pick<InputTextProps, 'error' | 'hasError' | 'customInput'> {
  secret: string
  setValue: UseFormSetValue<UpdateInformationFormState>
}

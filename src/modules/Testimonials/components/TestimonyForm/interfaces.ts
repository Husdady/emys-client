// Types
import type { UseFormSetError } from 'react-hook-form'

// Interfaces
import { ChangeParams } from '@components/Upload/interfaces'

export interface TestimonyFormState {
  userId?: string
  author: string
  testimony: string
  regionId?: string | null
  countryId?: string | null
  provinceId?: string | null
  districtId?: string | null
  previewAuthorPhoto?: string
  authorPhoto?: ChangeParams['file']
}

export interface SubmitPayload {
  state: TestimonyFormState
  setError: UseFormSetError<TestimonyFormState>
}

export interface TestimonyFormProps {
  defaultValues?: TestimonyFormState
  onSubmit: (payload: SubmitPayload) => Promise<void>
}

// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { TestimonyFormState } from './interfaces'

export const TESTIMONY_FORM_ID = `testimony-form-${createId()}`

export const DEFAULT_VALUES: TestimonyFormState = {
  author: '',
  testimony: '',
  regionId: null,
  countryId: null,
  provinceId: null,
  districtId: null
}

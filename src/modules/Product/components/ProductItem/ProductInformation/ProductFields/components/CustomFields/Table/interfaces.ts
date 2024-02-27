// Types
import type { CustomProductFieldsType } from '@modules/Products/api/types'

export interface ParsedExtraInformation {
  fieldId: string
  fieldName: string
  type: CustomProductFieldsType
  fieldValue: string | string[] | undefined
}

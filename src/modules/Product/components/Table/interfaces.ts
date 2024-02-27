// Types
import type { CustomProductFieldsType } from '@modules/Products/api/types'

export interface TableItem {
  fieldId: string
  fieldName: string
  type: CustomProductFieldsType
  fieldValue: string | string[] | undefined
}

export interface TableProps {
  items: TableItem[]
}

// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

export type CustomFieldsProps = Pick<ProductByCode, 'extraInformation' | 'customProductFields'>

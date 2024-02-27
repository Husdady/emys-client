// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export type CustomFieldsProps = Pick<Product, 'extraInformation' | 'customProductFields'>

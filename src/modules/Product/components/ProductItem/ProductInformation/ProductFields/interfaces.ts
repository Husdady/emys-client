// Interfaces
import { MutableRefObject } from 'react'
import { Product } from '@modules/Product/api/interfaces'

export interface ProductFieldsProps extends Product {
  innerInformationRef: MutableRefObject<HTMLDivElement | null>
}

// Interfaces
import { MutableRefObject } from 'react'
import { Product } from '@modules/Products/api/interfaces'

export interface ProductItemsProps {
  products: Product[]
  hasScrollbar: boolean
  productItemsRef: MutableRefObject<HTMLUListElement | null>
}

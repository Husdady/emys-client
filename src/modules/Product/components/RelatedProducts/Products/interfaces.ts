// Interfaces
import { MutableRefObject } from 'react'
import { Product } from '@modules/Products/api/interfaces'

export interface ProductsProps {
  products: Product[]
  hasScrollbar: boolean
  productItemsRef: MutableRefObject<HTMLUListElement | null>
}

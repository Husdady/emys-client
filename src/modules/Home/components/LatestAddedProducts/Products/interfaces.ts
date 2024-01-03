// Interfaces
import { MutableRefObject } from 'react'
import { Product } from '@modules/Products/api/interfaces'

export interface ProductsProps {
  isLoading: boolean
  hasScrollbar: boolean
  products: Product[]
  productItemsRef: MutableRefObject<HTMLUListElement | null>
}
